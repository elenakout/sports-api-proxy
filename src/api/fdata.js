const { Router } = require('express');
const fetch = require('node-fetch');

// Controllers
const nextGame = require('./controllers/next-game');
const matchInfo = require('./controllers/match-info');
const teamsInfo = require('./controllers/teams-info');

const router = Router();

const BASE_URL = 'https://api.football-data.org/v2';

//Next game

router.get('/next-game', async (req, res) => {
  const data = await nextGame();

  res.json(data);
});

// Match info
// http://api.football-data.org/v2/matches/279440

router.get('/match/:id', async (req, res) => {
  const matchId = req.params.id;

  const data = await matchInfo(matchId);
  res.json(data);
});

// teams info

router.get('/teams/:id', async (req, res) => {
  const teamId = req.params.id;

  const json = await teamsInfo(teamId);

  res.json(json);
});

// Standings
// http://api.football-data.org/v2/competitions/SA/standings

router.get('/standings', async (req, res) => {
  const teamId = req.params.id;

  const response = await fetch(`${BASE_URL}/competitions/SA/standings`, {
    headers: {
      'X-Auth-Token': process.env.API_TOKEN,
    },
  });

  const json = await response.json();
  res.json(json);
});

module.exports = router;
