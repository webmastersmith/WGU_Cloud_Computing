(async function () {
  const fs = await import('fs');
  const path = await import('path');
  // Image RegExp
  const reStr = /!\[.*?\]\(.*?\)/;
  const re = new RegExp(reStr, '');
  let total = 0;

  // variables
  // const directoryPath = 'D426_Database_Management_Foundations/Database_Management_Terms.md';
  // const removeLines = 2;
  const directoryPath = 'D338_Cloud_Platform_Solutions_AZ-104/Azure_Administrator_AZ-104.md';
  const removeLines = 52;

  const dataArr = fs
    .readFileSync(directoryPath, 'utf-8')
    // replace hidden characters added to start of files.
    .replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '')
    ?.split(/\r?\n/);

  // Get first line of Markdown as Anki Deck Title
  const deckName = dataArr[0]?.replaceAll('#', '')?.trim()?.replaceAll(' ', '_');

  // MARKED
  // https://marked.js.org/#usage
  if (!fs.existsSync('./marked.min.js')) {
    const txt = await (await fetch('https://cdn.jsdelivr.net/npm/marked/marked.min.js')).text();
    fs.writeFileSync('./marked.min.js', txt);
  }
  // MARKED-HIGHLIGHT
  // https://github.com/markedjs/marked-highlight
  if (!fs.existsSync('./marked-highlight.js')) {
    const txt = await (await fetch('https://cdn.jsdelivr.net/npm/marked-highlight/lib/index.umd.js')).text();
    fs.writeFileSync('./marked-highlight.js', txt);
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
      await fetch(
        'https://raw.githubusercontent.com/highlightjs/highlight.js/main/src/styles/base16/humanoid-dark.css'
      )
    )
      // await fetch('https://raw.githubusercontent.com/highlightjs/highlight.js/main/src/styles/xt256.css')
      .text();
    fs.writeFileSync('./hljs.css', txt);
  }

  // post process MARKED
  function postprocess(html) {
    // highlight
    const highlightedHTML = html.replace(/ ==(.*)== /, '<span style="background-color: yellow">$1</span>');
    // add code highlight class
    return highlightedHTML.replaceAll('<pre>', '<pre class="hljs">');
  }
  const { Marked } = require('./marked.min');
  const { markedHighlight } = require('./marked-highlight');
  const hljs = require('./highlight.min');
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    })
  );
  marked.use({
    hooks: { postprocess },
    gfm: true,
  });

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  }

  // AnkiConnect Should be installed on Anki deck as an addon and Anki should be running.
  // https://ankiweb.net/shared/info/2055492159
  // https://github.com/FooSoft/anki-connect
  // https://foosoft.net/projects/anki-connect/
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
    // create unique ID for every card to ensure it gets inserted into database.
    const ID = uuidv4();
    // Create cards in subDeck
    for (const { front, back, picture } of cards) {
      // add content to each card
      await sendToAnki('addNote', {
        note: {
          deckName: `${deckName}::${sectionName}`,
          modelName: 'Basic',
          fields: {
            // If card front text or back text already exist in database, anki will drop card.
            // Add random ID to card to avoid this problem.
            Front: `${front}<p style="font-size: 1px; color: #FFF;">${ID}</p>`,
            Back: `${back}<p style="font-size: 1px; color: #FFF;">${ID}</p>`,
          },
          // picture,
        },
      });
      // add images to storeMediaFile
      if (picture.length > 0) {
        for (const { filename, picPath } of picture) {
          await sendToAnki('storeMediaFile', {
            filename,
            path: picPath,
          });
        }
      }
    }
  }

  // Add styling to '.card' class.
  const AnkiCSS =
    '.card {font-family: arial;font-size: 20px;text-align: center;color: black;background-color: white;} img { object-fit: contain;}.cloze {font-weight: bold;color: blue;}.nightMode .cloze{color: lightblue;}';
  const customCSS = `th {border: 1px solid;padding:4px 6px;background-color: #3399ff;}td {border: 1px solid;padding:4px 6px;}tbody tr:nth-child(odd) {background-color: #D3D3D3;} pre{word-wrap: break-word; white-space: pre-wrap; word-break: break-word; text-align: start; padding: 1rem;}`;
  const hljsCSS = fs.readFileSync('./hljs.css', 'utf-8'); // highlight css
  const css = `${AnkiCSS}${customCSS}${hljsCSS}`;

  // view all models. Update styling of your model.
  // console.log(await sendToAnki('modelNamesAndIds'));
  // change default styling of cards.
  await sendToAnki('updateModelStyling', { model: { name: 'Basic', css } });
  // await sendToAnki('updateModelStyling', { model: { name: 'Basic (optional reversed card)', css } });
  // await sendToAnki('updateModelStyling', { model: { name: 'Basic (type in the answer)', css } });

  // This function sends object to ANKI-CONNECT addon listening on port 8765.
  // https://github.com/FooSoft/anki-connect
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
      if (!res.ok) throw 'Fetch failed to get response. Is Anki Running and Anki-Connect installed?';
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
    // Must always remove 1st line. Check if removeLines is less than 1.
    // Otherwise it will be confused with block of data.
    const dataStr = dataArr.slice(removeLines > 0 ? removeLines : 1).join('\n');
    // console.log(dataStr);
    // separate page into subSections (blocks)
    const blocks = dataStr.split(/^#{2} /gm).filter((line) => line.length > 0);
    // console.log(blocks[0], blocks[1]);
    // returns object with {section, cards} // section is name of subDeck. cards are: front, back, images for cards.
    const sections = blocks.map((block) => processBlocks(block));
    // console.log(JSON.stringify(sections, null, 2));
    return sections;
  }
  // parsePage(dataArr); // for testing

  // Images
  // Image path -pushed into pictures array.
  function createImagePath(line) {
    const filename = line.split('/').pop().replace(')', '');
    const picPath = path.join(process.cwd(), directoryPath.split('/')[0], 'img', filename);
    return { filename, picPath };
  }
  // Change image path from relative to filename. // ![pic description]("pic.jpg")
  // Anki will look into it's database to find image name.
  // inline with front or back of card.
  function fixImagePath(line) {
    const { filename } = createImagePath(line);
    return line
      .trim()
      .replace(/\(.*?\)/, `(${filename})`)
      .replace(/^- /, '');
  }
  function addNewLine(line) {
    return `${line}\n`;
  }
  function createFrontCard(blob) {
    // console.log(blob);
    let rawFront = '';
    const frontPictures = [];
    // check for images. Front images must have be separated with '%'.
    blob.split(/\s%\s/).forEach((str) => {
      // remove any escapes.
      const line = str.replace('%%', '%').trim();
      // console.log(line);
      // check if 'line' is an image
      if (re.test(line)) {
        rawFront += addNewLine(fixImagePath(line));
        frontPictures.push(createImagePath(line));
      } else {
        // make sure line is not empty
        if (line.trim()) {
          // Not an image, must be a question.
          // const h = line.length > 40 ? '###' : '##';
          const h = '###';
          rawFront += addNewLine(`${h} ${line.replace('-', '').trim()}`);
        }
      }
    });
    // console.log(rawFront);
    return {
      front: marked.parse(rawFront),
      frontPictures,
    };
  }
  function createBackCard(blobArr) {
    let rawBack = '';
    const backPictures = [];
    // loop all lines. fix images.
    for (const line of blobArr) {
      if (re.test(line)) {
        backPictures.push(createImagePath(line));
        rawBack += addNewLine(fixImagePath(line));
      } else {
        // must be regular line.
        // check and remove indent
        if (/\s+(\-|\d)/.test(line)) {
          rawBack += addNewLine(line.replace(/^  /, ''));
        } else {
          rawBack += addNewLine(line);
        }
      }
    }
    // console.log(rawBack);
    return {
      back: marked.parse(rawBack),
      backPictures,
    };
  }

  // Turn each '##' block into Question and Answer Cards.
  function processBlocks(block) {
    // console.log(block);
    // get and remove section name
    const [s, blankLine, ...rest] = block.split(/\r?\n/);
    // remove special characters from section name.
    let section = s?.replace(/[-:;+=\)\(\]\[\{\}!@#$%^&*<>,\\\/|]/g, '')?.trim() ?? 'Section';
    // split into each card(front and back together).
    const rawCardBlobs = rest.join('\n').split(/^\- /gm);

    // create array of cards. {rawFront, rawBack}
    const rawCards = [];
    for (const blob of rawCardBlobs) {
      const [rawFront, ...rawBack] = blob.split('\n');
      // front card can be blank line
      if (rawFront) {
        rawCards.push({ rawFront, rawBack });
      }
    }
    // console.log(rawCards);

    const cards = rawCards.map(({ rawFront, rawBack }) => {
      // console.log(rawFront);
      const { front, frontPictures } = createFrontCard(rawFront);
      // console.log(front);
      const { back, backPictures } = createBackCard(rawBack);
      // console.log(back, backPictures);
      return { front, back, picture: frontPictures.concat(backPictures) };
    });
    // if (section.startsWith('2.10')) console.log(cards);
    console.log(section, cards.length);
    total += cards.length;
    return { section, cards };
  }
  console.log('Total Cards: ', total);
})();
