(async function () {
  const fs = await import('fs');
  const data = fs.readFileSync('./table.txt', 'utf-8');
  const dataArr = data.split(/\r?\n/);
  let str = '';
  dataArr.forEach((line, i) => {
    if ((i + 1) % 4 === 0) str += line + '\n';
    else str += line + '\t';
  });
  fs.writeFileSync('out.txt', str);
  // console.log(str);
})();
