(async function () {
  const fs = await import('fs');
  const path = await import('path');
  // variables
  // const dataArr = fs.readFileSync('D334_Cryptography/Cryptography.md', 'utf-8')?.split(/\r?\n/);
  const dataArr = fs.readFileSync('D281_Linux_Foundations/Linux_Foundations.md', 'utf-8')?.split(/\r?\n/);
  const directoryPath = 'D334_Cryptography';
  // Get first line of Markdown as Anki Deck Title
  const deckName = dataArr[0]?.replaceAll('#', '')?.trim()?.replaceAll(' ', '_');
  // const deckName = 'WGU_D334_Intro_to_Cryptography';
  const removeLines = 20;

  // SHOWDOWN -markdown => html parser.
  // https://github.com/showdownjs/showdown/wiki
  // Download showdown if not already downloaded. It parses markdown into html.
  // check if showdown file exist
  if (!fs.existsSync('./showdown.min.js')) {
    // curl -LO 'https://unpkg.com/showdown/dist/showdown.min.js' // downloads to current directory.
    const txt = await (await fetch('https://unpkg.com/showdown/dist/showdown.min.js')).text();
    fs.writeFileSync('./showdown.min.js', txt);
  }
  const showdown = require('./showdown.min');
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
  // github flavored markdown => html.
  showdown.setFlavor('github');
  // converter.makeHtml(textBlock) // returns html.
  const converter = new showdown.Converter({
    tables: true,
    tasklist: true,
    extensions: ['table-header-css', 'table-data-css', 'table-row-css'],
  });

  // AnkiConnect Should be installed on Anki deck as an addon and Anki should be running.
  // create Main Deck Name
  await sendToAnki('createDeck', { deck: deckName });
  // Create SubDecks
  for (const { section, cards } of await parsePage(dataArr)) {
    // {section, cards: [{front, back, picture}] }
    // subDeck name remove spaces.
    const sectionName = section.replaceAll(' ', '_').trim();
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
    // separate page into subSections (blocks)
    const blocks = dataStr.match(/[^#]*/g).filter((line) => line.length > 0);
    // console.log(blocks);
    // returns object with {section, text} // section is name of subDeck. text is front, back, images for cards.
    const sections = blocks.map((block) => processBlocks(block));
    // console.log(JSON.stringify(sections, null, 2));
    return sections;
  }
  parsePage(dataArr);

  // Each block is separated by '##'
  // need object with {section, text: [{front, back, picture}]}
  function processBlocks(block) {
    // get and remove section name
    const [s, ...rest] = block.split(/\r?\n/).filter((line) => line.length > 0);
    let section = s?.trim() ?? 'Section';
    // cards { front: Question, back: [], picture: [] } array.
    const cards = [];
    for (const line of rest) {
      // must be question if starts with '-'.
      if (line.startsWith('-')) {
        cards.push({ front: `<h2>${line.replace('-', '').trim()}</h2>`, back: [], picture: [] });
        continue;
      }
      // must be answer if starts with '  -'.
      const lastItem = cards.pop();
      // check if line is image
      if (/.*!\[(.*)\]\((.*)\)/.test(line)) {
        const picPath = line.replace(/.*!\[.*\]\((.*)\)/, '$1');
        const filename = picPath.split('/').pop();
        const newPic = path.join(process.cwd(), directoryPath, 'img', filename);
        // create the picture data.
        lastItem.picture.push({ path: newPic, filename, fields: ['Back'] });
        cards.push(lastItem);
        continue;
      }
      lastItem.back.push(line.replace(/\s{2}/, '').trim());
      cards.push(lastItem);
    }
    const newCards = cards.map((card) => {
      const back = converter.makeHtml(card.back.join('\n'));
      return { ...card, back };
    });
    return { section, cards: newCards };

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
