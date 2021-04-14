import axios from "axios";

//hardcoded place holders for sportsradar calls
const CORS = "https://cors-anywhere.herokuapp.com/";


//need to build a backend route schedule needs to return axios.get("api/user/:id");



export default {

  schedule: function (query) {
    return axios.get( "/api/sport", query);
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
