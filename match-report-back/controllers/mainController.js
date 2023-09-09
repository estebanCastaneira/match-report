const stats = require("../data/stats.json");
const match = require("../data/match.json");
async function getStats(req, res) {
  try {
    res.json(stats);
  } catch (error) {
    console.error("Error while making the request", error);
    res.status(500).send("Server Error");
  }
}

async function getMatch(req, res) {
  try {
    res.json(match);
  } catch (error) {
    console.error("Error while making the request", error);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getStats,
  getMatch,
};
