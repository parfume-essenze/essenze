const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('data.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const data = [];
  let id = 1;
  let isFirst = true;

  for await (const line of rl) {
    if (isFirst) {
      isFirst = false;
      continue; // Skip header
    }

    const cols = line.split(',');
    const gender = cols[1]?.trim() || '';
    const name = cols[2]?.trim() || '';
    const brand = cols[3]?.trim() || '';
    const price10 = cols[4]?.trim() || '';

    if (!name) continue; // Skip empty rows

    // Generate random 13 digit barcode
    const barcode = Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
    const article = name.toUpperCase().substring(0, 15);

    let category = 'Essence';
    if (gender === 'M') category = 'Erkaklar (M)';
    if (gender === 'W') category = 'Ayollar (W)';
    if (gender === 'U') category = 'Uniseks (U)';

    data.push({
      id: id++,
      name,
      article,
      barcode,
      category,
      supplier: brand || '—',
      price: price10
    });
  }

  const fileContent = `export const catalogData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync('src/data/catalogData.js', fileContent);
  console.log('Processed ' + data.length + ' rows.');
}

processLineByLine();
