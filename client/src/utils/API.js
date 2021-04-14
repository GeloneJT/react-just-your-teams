import axios from "axios";

//hardcoded place holders for sportsradar calls
const CORS = "https://cors-anywhere.herokuapp.com/";

const BASE =
  "https://api.sportradar.us/soccer/trial/v4/en/competitors/sr:competitor:";

const SUMMARY = "/summaries.json?api_key=";

const APIKEY = "paste from .env";
//need to build a backend route schedule needs to return axios.get("api/user/:id");



export default {

  schedule: function (query) {
    return axios.get( `${CORS}${BASE}${query}${SUMMARY}${APIKEY}`);
  },

  getUsers: function (req, res) {
    return axios.get("/api/user");
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },

  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  saveUser: function (userData) {
    console.log(userData)
    return axios.post("/api/user", userData);
  },
};
