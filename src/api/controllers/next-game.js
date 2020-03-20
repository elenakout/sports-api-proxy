const fetch = require('node-fetch');

let cache = null;
let lastCacheTime = null;

async function nextGame(base) {
  if (cache && lastCacheTime > Date.now() - 60 * 60 * 12) {
    return cache;
  } else {
    const response = await fetch(`${base}/teams/108/matches?status=SCHEDULED`, {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN,
      },
    });

    const nGame = await response.json();
    lastCacheTime = Date.now();
    cache = nGame.matches[0];

    return nGame.matches[0];
  }
}

module.exports = nextGame;
