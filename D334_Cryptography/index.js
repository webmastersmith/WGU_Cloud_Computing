(async function () {
  const fs = await import('fs');
  async function invoke(action, params = {}) {
    // will return object with result and error field when error.
    try {
      const res = await fetch('http://127.0.0.1:8765', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, version: 1, params }),
      });
      const data = await res.json();
      if (!res.ok) throw 'Fetch failed to get response. Is Anki Connect listening?';
      if (data.error) throw data;
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // START HERE!
  const data = fs.readFileSync('Cryptography.md', 'utf-8');
  const deckName = 'WGU_D334_Intro_to_Cryptography';

  // create deck
  await invoke('createDeck', { deck: deckName });
  // create subDeck
  await invoke('createDeck', { deck: `${deckName}::Section_1` });

  await invoke('addNote', {
    note: {
      deckName: `${deckName}::Section_1`,
      modelName: 'Basic',
      fields: {
        Front: 'front content',
        Back: 'back content',
      },
    },
  });

  async function parsePage(data) {
    const dataStr = data.split(/\r?\n/).slice(68).join('\n');

    // create blocks
    const blocks = dataStr.match(/[^#]*/g).filter((line) => line.length > 0);
    // console.log(blocks);
    // console.log(blocks.length);

    // returns object with {section, text}
    const sections = blocks.map((block) => processBlocks(block));
    // console.log(sections);

    // need object with {section, front, back, pic array.}
    function processBlocks(block) {
      let section = 'Section';
      // get and remove section
      const [s, ...rest] = block.split(/\r?\n/).filter((line) => line.length > 0);
      section = s.trim();
      // create section blocks
      const sectionBlocks = newRest
        .join('\n')
        .match(/[^;]*/g)
        .filter((line) => line.length > 4);
      // console.log(sectionBlocks.length);

      const picture = [];
      let front = '';
      let back = '';
      // format each section
      sectionBlocks.forEach((lineBlock) => {
        // check each line if an image.
        // separate key, value
        const [key, value] = lineBlock.trim().split(':');
        // console.log('value: ', value);
        front = key.replaceAll('*', '').replace('-', '').trim();
        // loop each line to find images.
        value.split(/\r?\n/).forEach((line) => {
          if (/.*!\[(.*)\]\((.*)\)/.test(line)) {
            const filename = line.split('/').pop();
            const { groups: url } = line.match(/.*!\[(.*)\]\((?<url>.*)\)/);
            picture.push({
              url,
              filename,
              fields: ['Back'],
            });
          } else {
            back += line.trim() + '\n';
          }
        });
      });
      return { section, front, back, picture };
    }
  }
})();

// options: {
//   allowDuplicate: false,
//   duplicateScope: 'deck',
//   duplicateScopeOptions: {
//     deckName: 'Japanese::Tokyo',
//     checkChildren: false,
//     checkAllModels: false,
//   },
// },
