const { Router } = require("express");
const fetch = require("node-fetch");

const router = Router();

const BASE_URL = "https://api.football-data.org/v2";

//Next game

router.get("/next-game", async (req, res) => {
  const response = await fetch(
    `${BASE_URL}/teams/108/matches?status=SCHEDULED&limit=1`,
    {
      headers: {
        "X-Auth-Token": process.env.API_TOKEN
      }
    }
  );

  const json = await response.json();
  res.json(json.matches[0]);
});

// Match info
// http://api.football-data.org/v2/matches/279440

router.get("/match/:id", async (req, res) => {
  const matchId = req.params.id;

  const response = await fetch(`${BASE_URL}/matches/${matchId}`, {
    headers: {
      "X-Auth-Token": process.env.API_TOKEN
    }
  });

  const json = await response.json();
  res.json(json);
});

// teams info

router.get("/teams/:id", async (req, res) => {
  const teamId = req.params.id;

  const response = await fetch(`${BASE_URL}/teams/${teamId}`, {
    headers: {
      "X-Auth-Token": process.env.API_TOKEN
    }
  });

  const json = await response.json();
  res.json(json);
});

// Stadings
// http://api.football-data.org/v2/competitions/SA/standings

router.get("/stadings", async (req, res) => {
  const teamId = req.params.id;

  const response = await fetch(`${BASE_URL}/competitions/SA/standings`, {
    headers: {
      "X-Auth-Token": process.env.API_TOKEN
    }
  });

  const json = await response.json();
  res.json(json);
});

module.exports = router;
