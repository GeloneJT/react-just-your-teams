import axios from "axios";

//hardcoded place holders for sportsradar calls
const BASEURL = process.env.BASEURL;

const SCHEDULECALL =
  process.env.SCHEDULECALL + process.env.APIKEY + process.env.LASTFIVE;

const SCORECALL =
  process.env.SCORECALL + process.env.APIKEY + process.env.LASTFIVE;

export default {

  schedule: function (query) {
    console.log("SCHEDULE SEARCH: " + query);
    return axios.get(BASEURL + query + SCHEDULECALL);
  },
  score: function (team) {
    console.log("SCHEDULE SEARCH: " + team);
    return axios.get(BASEURL + team + SCORECALL);
  },

  getUsers: function () {
    return axios.get("/api/user");
  },

  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },

  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
};
