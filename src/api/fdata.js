const { Router } = require('express');
const fetch = require('node-fetch');

// Controllers
const nextGame = require('./controllers/next-game');
const matchInfo = require('./controllers/match-info');
const teamsInfo = require('./controllers/teams-info');
const standings = require('./controllers/standings');

const router = Router();

const BASE_URL = 'https://api.football-data.org/v2';

//Next game

router.get('/next-game', async (req, res) => {
  const data = await nextGame(BASE_URL);

  res.json(data);
});

// Match info
// http://api.football-data.org/v2/matches/279440

router.get('/match/:id', async (req, res) => {
  const matchId = req.params.id;

  const data = await matchInfo(BASE_URL, matchId);
  res.json(data);
});

// teams info

router.get('/teams/:id', async (req, res) => {
  const teamId = req.params.id;

  const json = await teamsInfo(BASE_URL, teamId);

  res.json(json);
});

// Standings
// http://api.football-data.org/v2/competitions/SA/standings

router.get('/standings', async (req, res) => {
  const json = await standings(BASE_URL);

  res.json(json);
});

module.exports = router;
