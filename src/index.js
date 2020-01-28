const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fetch = require("node-fetch");

require("dotenv").config();

const app = express();
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  });
});

// const TWITTER_BASE_URL = "https://api.twitter.com/1.1";

app.get("/dayMatches", async (req, res) => {
  const response = await fetch(
    "https://api.football-data.org/v2/competitions/SA/matches/?matchday=14",
    {
      headers: {
        "X-Auth-Token": process.env.API_TOKEN
      }
    }
  );
  const json = await response.json();
  res.json(json);
});

const port = process.env.PORT || 1228;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
