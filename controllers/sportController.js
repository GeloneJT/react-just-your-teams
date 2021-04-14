const axios = require("axios");

const BASE =
  "https://api.sportradar.us/soccer/trial/v4/en/competitors/sr:competitor:";

const SUMMARY = "/summaries.json?api_key=";

const APIKEY = process.env.API_KEY;

module.exports = {
  getSummarries: function (req, res) {
    console.log("GETSUMMARIES: ", req.body);
    return axios.get(`${BASE}${req.body}${SUMMARY}${APIKEY}`);
  },
};