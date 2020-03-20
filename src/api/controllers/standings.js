const fetch = require('node-fetch');

let cache = null;
let lastCacheTime = null;

async function standings(base) {
  if (cache && lastCacheTime > Date.now() - 60 * 60 * 12) {
    console.log('cache');
    return cache;
  }

  const response = await fetch(`${base}/competitions/SA/standings`, {
    headers: {
      'X-Auth-Token': process.env.API_TOKEN,
    },
  });

  const json = await response.json();
  lastCacheTime = Date.now();
  cache = {
    competition: json.competition,
    currentMatchday: json.season.currentMatchday,
    standings: json.standings[0].table,
  };

  console.log('Call');

  return {
    competition: json.competition,
    currentMatchday: json.season.currentMatchday,
    standings: json.standings[0].table,
  };
}

module.exports = standings;
