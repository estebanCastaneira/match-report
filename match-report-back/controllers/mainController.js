const axios = require("axios");
async function getStats(req, res) {
  try {
    const response = await axios.get(
      "https://the-futbol-company.notion.site/Get-stats-endpoint-43e81bbbcda743c0b3437a62744cebdd"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error while making the request", error);
    res.status(500).send("Server Error");
  }
}

async function getMatch(req, res) {
  try {
    const response = await axios.get(
      "https://the-futbol-company.notion.site/Get-match-endpoint-8565cfa247264028b6579f246b09cc1b"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error while making the request", error);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getStats,
  getMatch,
};
