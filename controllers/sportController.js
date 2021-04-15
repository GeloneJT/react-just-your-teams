const axios = require("axios");
require("dotenv").config();
const BASE =
  "https://api.sportradar.us/soccer/trial/v4/en/competitors/sr:competitor:";

const SUMMARY = "/summaries.json?api_key=";

const APIKEY = process.env.API_KEY;

const url = `${BASE}48${SUMMARY}${APIKEY}`
module.exports = {
  getSummarries: function (req, res) {
    console.log(url)
    console.log("GET SUMMARIES: ", req.body);
    axios
      .get(`${BASE}${req.body}${SUMMARY}${APIKEY}`)
      .then(({ data }) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};