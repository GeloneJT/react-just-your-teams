const axios = require("axios");
require("dotenv").config();
const BASE =
  "https://api.sportradar.us/soccer/trial/v4/en/competitors/sr:";

const SUMMARY = "/summaries.json?api_key=";

const APIKEY = process.env.API_KEY;

module.exports = {
  getSummarries: function ( req, res) {
    console.log("REQ.QUERY: ", req.query);
    const { query: params } = req;
    const team = params.q;
    console.log("PARAMS.Q: ", params.q);
    const url = `${BASE}${team}${SUMMARY}${APIKEY}`;
    console.log("URL: ", url);
    axios
      .get(
        url
      )
      .then(({ data }) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};