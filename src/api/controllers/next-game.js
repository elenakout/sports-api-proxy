const fetch = require('node-fetch');

const BASE_URL = 'https://api.football-data.org/v2';

let cache = {};
let lastCacheTime = null;

async function nextGame() {
  if (cache && lastCacheTime > Date.now() - 60 * 60 * 12) {
    console.log('chase returned');
    return cache;
  }

  const response = await fetch(
    `${BASE_URL}/teams/108/matches?status=SCHEDULED`,
    {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN,
      },
    }
  );

  const nGame = await response.json();
  lastCacheTime = Date.now();
  cache.nGame = nGame;
  cache.status = 'ok';
  console.log('call returned');
  return nGame;
}

module.exports = nextGame;

// async function scrapeTable() {
//   if (cache && lastCacheTime > Date.now() - (1000 * 60 * 10)) {
//     return cache;
//   }
//   const response = await fetch(url);
//   const html = await response.text();
//   const $ = cheerio.load(html);
//   const title = $('#countries').text();
//   const table = $('#main_table_countries');
//   const header = table.find('thead tr');
//   const headers = [];
//   header.find('th').each((i, element) => {
//     headers.push($(element).text().trim().replace(/\W/g, '_'));
//   });
//   const rows = [];
//   $(table.find('tbody')[0]).find('tr').each((i, element) => {
//     const row = {};
//     $(element).find('td').each((i, column) => {
//       row[headers[i]] = $(column).text().trim();
//       if (i !== 0) {
//         row[headers[i]] = Number(row[headers[i]].replace(/\+|,/g, '') || 0);
//       }
//     });
//     rows.push(row);
//   });
//   cache = rows;
//   lastCacheTime = Date.now();
//   return rows;
// }

// module.exports = scrapeTable;
