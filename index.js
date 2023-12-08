(async function () {
  const fs = await import('fs');
  const path = await import('path');
  // variables
  // const dataArr = fs.readFileSync('D334_Cryptography/Cryptography.md', 'utf-8')?.split(/\r?\n/);
  const dataArr = fs.readFileSync('D318_Cloud_Applications/Cloud_Applications.md', 'utf-8')?.split(/\r?\n/);
  const directoryPath = 'D334_Cryptography';
  // Get first line of Markdown as Anki Deck Title
  const deckName = dataArr[0]?.replaceAll('#', '')?.trim()?.replaceAll(' ', '_');
  // const deckName = 'WGU_D334_Intro_to_Cryptography';
  const removeLines = 22; // line before you want to start parsing. 0 is first line.

  // SHOWDOWN -markdown => html parser.
  // https://github.com/showdownjs/showdown/wiki
  // Download showdown if not already downloaded. Showdown parses markdown into html.
  if (!fs.existsSync('./showdown.min.js')) {
    const txt = await (await fetch('https://unpkg.com/showdown/dist/showdown.min.js')).text();
    fs.writeFileSync('./showdown.min.js', txt);
  }
  // https://github.com/highlightjs/highlight.js#importing-the-library
  if (!fs.existsSync('./highlight.min.js')) {
    const txt = await (
      await fetch('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js')
    ).text();
    fs.writeFileSync('./highlight.min.js', txt);
  }
  // CSS for Highlight.js
  // https://github.com/highlightjs/highlight.js/tree/main/src/styles
  // https://highlightjs.org/examples
  if (!fs.existsSync('./hljs.css')) {
    // change this to whatever theme you want.
    const txt = await (
      await fetch('https://raw.githubusercontent.com/highlightjs/highlight.js/main/src/styles/xt256.css')
    ).text();
    fs.writeFileSync('./hljs.css', txt);
  }
  const showdown = require('./showdown.min');
  const hljs = require('./highlight.min');
  const hljsCSS = fs.readFileSync('./hljs.css', 'utf-8');
  // These next few functions add styling to the html.
  // Add border and color to table header
  showdown.extension('table-header-css', {
    type: 'output',
    filter: (html) => {
      const regex = /<th id=".*">/g;
      return html.replace(regex, '<th style="border: 1px solid;padding:4px 6px;background-color: #3399ff">');
    },
  });
  // add border to table cells
  showdown.extension('table-data-css', {
    type: 'output',
    filter: (html) => {
      const regex = /<td>/g;
      return html.replace(regex, '<td style="border: 1px solid;padding:4px 6px;">');
    },
  });
  // zebra stripe odd table rows
  showdown.extension('table-row-css', {
    type: 'output',
    filter: (html) => {
      return html.replaceAll(/<tbody>.*?<\/tbody>/gs, (match) =>
        match
          .split('</tr>')
          .map((el, i) => (i % 2 == 1 ? el.replace('<tr>', '<tr style="background-color: #D3D3D3;">') : el))
          .join('</tr>')
      );
    },
  });
  // code blocks
  showdown.extension('code-blocks-css', {
    type: 'output',
    filter: (html) => {
      function htmlunencode(text) {
        return text
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"');
      }
      return html.replace(/<pre>.*?<\/pre>/gs, (match) => {
        // remove class because highlight.js adds span tags around each word?
        const fix = match.replace(/ class=".*?"/g, '');
        // highlight.js returns html-encoded text. Need to un-encode it.
        const codeBlock = htmlunencode(hljs.highlightAuto(fix).value);
        // override the style of Anki card.
        const txt = codeBlock.replace(/<pre>/, '<pre class="hljs" style="text-align: start; padding: 1rem">');
        return txt;
      });
    },
  });
  // github flavored markdown => html.
  showdown.setFlavor('github');
  // converter.makeHtml(textBlock) // returns html.
  const converter = new showdown.Converter({
    tables: true,
    ghCodeBlocks: true,
    tasklist: true,
    extensions: ['table-header-css', 'table-data-css', 'table-row-css', 'code-blocks-css'],
  });

  // AnkiConnect Should be installed on Anki deck as an addon and Anki should be running.
  // create Main Deck Name
  await sendToAnki('createDeck', { deck: deckName });
  // Create SubDecks
  for (const { section, cards } of await parsePage(dataArr)) {
    // console.log(section, cards);
    // {section, cards: [{front, back, picture}] }
    // subDeck name remove spaces.
    const sectionName = section?.replaceAll(' ', '_')?.trim();
    // create subDeck name
    await sendToAnki('createDeck', { deck: `${deckName}::${sectionName}` });
    // Create cards in subDeck
    for (const { front, back, picture } of cards) {
      // add content to each card
      await sendToAnki('addNote', {
        note: {
          deckName: `${deckName}::${sectionName}`,
          modelName: 'Basic',
          fields: {
            Front: front,
            Back: back,
          },
          picture,
        },
      });
    }
  }

  // Add styling to '.card' class.
  const nativeCSS =
    '.card {font-family: arial;font-size: 20px;text-align: center;color: black;background-color: white;} img { object-fit: contain;}.cloze {font-weight: bold;color: blue;}.nightMode .cloze{color: lightblue;}';
  const css = `${nativeCSS}${hljsCSS}`;

  // view all models. Update styling of your model.
  // console.log(await sendToAnki('modelNamesAndIds'));
  // change default styling of cards.
  await sendToAnki('updateModelStyling', { model: { name: 'Basic', css } });
  await sendToAnki('updateModelStyling', { model: { name: 'Basic (optional reversed card)', css } });
  await sendToAnki('updateModelStyling', { model: { name: 'Basic (type in the answer)', css } });

  // This function sends object to ANKI-CONNECT addon listening on port 8765.
  // https://github.com/amikey/anki-connect
  async function sendToAnki(action, params = {}) {
    // will return object with result and error field when error.
    try {
      const res = await fetch('http://127.0.0.1:8765', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, version: 1, params }),
      });
      if (!res.ok) throw 'Fetch failed to get response. Is Anki Connect listening?';
      const json = await res.json();
      if (res.error) throw res.error;
      return json;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // START HERE!
  //
  //
  // START Functions
  // separate page into sections.
  async function parsePage(dataArr) {
    // remove tips. The ternary is so the first line (title) is always removed.
    // Otherwise it will be confused with block of data.
    const dataStr = dataArr.slice(removeLines > 0 ? removeLines : 1).join('\n');
    // console.log(dataStr);
    // separate page into subSections (blocks)
    const blocks = dataStr.split(/^#{2} /gm).filter((line) => line.length > 0);
    // console.log(blocks);
    // returns object with {section, text} // section is name of subDeck. text is front, back, images for cards.
    const sections = blocks.map((block) => processBlocks(block));
    // console.log(JSON.stringify(sections, null, 2));
    return sections;
  }
  // parsePage(dataArr); // for testing

  // Turn each '##' block into Question and Answer Cards.
  function processBlocks(block) {
    // get and remove section name
    const [s, ...rest] = block.split(/\r?\n/);
    // .filter((line) => line.length > 0);
    let section = s?.replace(/\W+/g, '')?.trim() ?? 'Section';
    // cards { front: Question, back: [], picture: [] } array.
    // console.log(rest);
    const cardsArr = [];
    for (const line of rest) {
      // console.log(line);
      // must be question if starts with '-'.
      if (line.startsWith('-')) {
        cardsArr.push({
          front: `<h2>${line.replace('-', '').replaceAll('*', '').trim()}</h2>`,
          back: [],
          picture: [],
        });
        continue;
      }
      // must be answer if starts with '  -'.
      const lastItem = cardsArr.pop();
      // The very first line can be blank and will fall through to answer and end up undefined.
      if (!lastItem) continue;
      // check if line is image
      if (/.*!\[(.*)\]\((.*)\)/.test(line)) {
        const picPath = line.replace(/.*!\[.*\]\((.*)\)/, '$1');
        const filename = picPath.split('/').pop();
        const newPic = path.join(process.cwd(), directoryPath, 'img', filename);
        // create the picture data.
        lastItem.picture.push({ path: newPic, filename, fields: ['Back'] });
        cardsArr.push(lastItem);
        continue;
      }
      // console.log(line);
      // need the blank lines for tables. Only trim if line is not blank.
      const str = line.length > 0 ? line?.replace(/\s{2}/, '').trim() : line;
      lastItem?.back?.push(str);
      cardsArr.push(lastItem);
    }
    // console.log(cardsArr);
    // convert 'back' markdown to html.
    const cards = cardsArr.map((card) => {
      const back = converter.makeHtml(card.back.join('\n'));
      return { ...card, back };
    });
    return { section, cards };

    // console.log(sectionBlocks);

    // // const cards = [];
    // // // get front, back, image from each section block. Card data.
    // // sectionBlocks.forEach((cardBlock) => {
    // //   let front = '';
    // //   let back = '';
    // //   const picture = [];

    //   // Each cardBlock is a Card. Get question and answer.
    //   // separate first line, due to tables having ':' in them.
    //   // The first line will be the question. 'rest' will be an array, empty or lines.
    //   const [firstLine, ...rest] = cardBlock?.trim().split(/\r?\n/);
    //   // // Check if 'cloze'.
    //   // if (/\{\{.*?\}\}/.test(firstLine)) {
    //   //   cards.push({ firstLine, back, picture });
    //   //   return;
    //   // }
    //   // It may have an answer in the line separated by ':'.
    //   const [firstLineQuestion = '', firstLineAnswer = ''] = firstLine?.trim().split(':');
    //   // Bold firstLineQuestion.
    //   front = '<h2>' + firstLineQuestion.replaceAll('*', '')?.trim().replace(/^-/, '')?.trim() + '</h2>';
    //   // The 'rest' is the backside(firstLineAnswer) of card.
    //   // 'firstLineAnswer' could be blank or text. If text, then add newline. Then join 'rest' with it.
    //   rest.unshift(firstLineAnswer?.trim() + '\n' || '');
    //   // The first line is processed.

    //   // ANSWER BLOCK STARTS. Could be multiple lines, tables and images.
    //   let textNoImages = '';
    //   let lineIsTable = false; // check if previous line was table. Has to be outside loop.
    //   rest.forEach((line) => {
    //     // discard empty lines
    //     if (line.length < 1) return;
    //     // IMAGE -check if line is an image.
    //     if (/.*!\[(.*)\]\((.*)\)/.test(line)) {
    //       const picPath = line.replace(/.*!\[.*\]\((.*)\)/, '$1');
    //       const filename = picPath.split('/').pop();
    //       const newPic = path.join(process.cwd(), directoryPath, 'img', filename);
    //       // create the picture data.
    //       picture.push({
    //         path: newPic,
    //         filename,
    //         fields: ['Back'],
    //       });
    //       return;
    //     }
    //     // TEXT or TABLE.
    //     // Check for blockquote
    //     if (line.trim().startsWith('>')) textNoImages += `\n${line.replace(/^\s{2}/, '').trimEnd()}\n`;
    //     // check for table.
    //     if (line.trim().startsWith('|')) {
    //       // if line is a table element, only add newline between it and previous text.
    //       // if the previous line was a table line, then linIsTable will be true so don't add newline.
    //       // the showdown markdown -> html will not recognize tables unless it has newline before it.
    //       textNoImages += `${!lineIsTable ? '\n' : ''}${line.trim()}\n`;
    //       lineIsTable = true;
    //     } else {
    //       // add newline after table if finished.
    //       textNoImages += `${lineIsTable ? '\n' : ''}${line.replace(/^\s{2}/, '').trimEnd() + '\n'}`; // take out two spaces from each bullet indents.
    //       lineIsTable = false;
    //     }
    //   });
    //   // Parse md into html with 'Showdown'.
    //   back = converter.makeHtml(textNoImages);
    //   // console.log(back); // check the html
    //   cards.push({ front, back, picture });
    // });
    // // console.log(text);
    // return { section, cards };
  }
})();
