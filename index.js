(async function () {
  const fs = await import('fs');
  const path = await import('path');
  // variables
  const directoryPath = 'D335_Intro_Programming_Python/Intro_Python.md';
  const dataArr = fs.readFileSync(directoryPath, 'utf-8')?.split(/\r?\n/);
  // Get first line of Markdown as Anki Deck Title
  const deckName = dataArr[0]?.replaceAll('#', '')?.trim()?.replaceAll(' ', '_');
  const removeLines = 9; // line before you want to start parsing. 0 is first line.

  // SHOWDOWN -markdown => html parser.
  // https://github.com/showdownjs/showdown/wiki
  // Download showdown if not already downloaded. Showdown parses markdown into html.
  if (!fs.existsSync('./showdown.min.js')) {
    const txt = await (await fetch('https://unpkg.com/showdown/dist/showdown.min.js')).text();
    fs.writeFileSync('./showdown.min.js', txt);
  }
  // Highlight.js - highlight code blocks.
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
  // highlight code blocks
  showdown.extension('highlight-code-blocks', {
    type: 'output',
    filter: (html) => {
      function entitiesToAscii(text) {
        return text
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#x27;/g, "'")
          .replace(/&#x39;/g, "'");
      }
      return html.replace(/<pre>.*?<\/pre>/gs, (match) => {
        // console.log('match', match);
        // highlight.js returns html entities encoded text. Need to decode it back to Ascii.
        const codeBlock = entitiesToAscii(hljs.highlightAuto(match).value);
        // console.log('codeBlock', codeBlock);
        // remove weird span tags in the 'code' block
        const fix = codeBlock.replace(/<code .*?\/span>>/, '<code class=hljs>');
        // console.log('fix', fix);
        // Add custom css to pre tags.
        const txt = fix.replace(/<pre>/, '<pre class="hljs" style="text-align: start; padding: 1rem">');
        // console.log('txt', txt);
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
    extensions: ['highlight-code-blocks'],
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
  const AnkiCSS =
    '.card {font-family: arial;font-size: 20px;text-align: center;color: black;background-color: white;} img { object-fit: contain;}.cloze {font-weight: bold;color: blue;}.nightMode .cloze{color: lightblue;}';
  const customCSS = `th {border: 1px solid;padding:4px 6px;background-color: #3399ff;}td {border: 1px solid;padding:4px 6px;}tbody tr:nth-child(odd) {background-color: #D3D3D3;} pre{word-wrap: break-word;white-space: pre-wrap; word-break: break-word;}`;
  const hljsCSS = fs.readFileSync('./hljs.css', 'utf-8'); // highlight css
  const css = `${AnkiCSS}${customCSS}${hljsCSS}`;

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
    // returns object with {section, cards} // section is name of subDeck. cards are: front, back, images for cards.
    const sections = blocks.map((block) => processBlocks(block));
    // console.log(JSON.stringify(sections, null, 2));
    return sections;
  }
  // parsePage(dataArr); // for testing

  // Turn each '##' block into Question and Answer Cards.
  function processBlocks(block) {
    // get and remove section name
    const [s, ...rest] = block.split(/\r?\n/);
    // remove special characters from section name.
    let section = s?.replace(/[-:;+=\)\(\]\[\{\}!@#$%^&*<>,\\\/|]/g, '')?.trim() ?? 'Section';
    // cards { front: Question, back: [], picture: [] } array.
    // console.log(rest);
    const cardsArr = [];
    let isCodeBlock = false;
    for (const line of rest) {
      // console.log(line);
      // must be question if starts with '-'.
      if (line.startsWith('-')) {
        const h = line.length > 40 ? '###' : '##';
        const front = converter.makeHtml(`${h} ${line.replace('-', '').trim()}`);
        // console.log(front);
        cardsArr.push({
          front,
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
        const newPic = path.join(process.cwd(), directoryPath.split('/')[0], 'img', filename);
        // create the picture data.
        lastItem.picture.push({ path: newPic, filename, fields: ['Back'] });
        cardsArr.push(lastItem);
        continue;
      }
      // console.log(line);
      // code blocks do not remove spacing.
      if (line?.trimStart()?.startsWith('```')) isCodeBlock = !isCodeBlock;
      // need the blank lines for tables. Only trim if line is not blank.
      const str = line.length > 0 && !isCodeBlock ? line?.replace(/^\s{2}|\t|\s+$/, '') : line;
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
  }
})();
