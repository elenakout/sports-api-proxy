const fetch = require('node-fetch');

const BASE_URL = 'https://api.football-data.org/v2';

let cache = null;
let lastCacheTime = null;

async function matchInfo(matchId) {
  if (cache && lastCacheTime > Date.now() - 60 * 60 * 12) {
    return cache;
  }

  const response = await fetch(`${BASE_URL}/matches/${matchId}`, {
    headers: {
      'X-Auth-Token': process.env.API_TOKEN,
    },
  });

  const mInfo = await response.json();
  lastCacheTime = Date.now();
  cache = mInfo;

  return mInfo;
}

module.exports = matchInfo;
