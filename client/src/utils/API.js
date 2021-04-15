import axios from "axios";

//need to build a backend route schedule needs to return axios.get("api/user/:id");

export default {

  schedule: function (query) {
    return axios.get( "/api/sport", query);
  },

  getUsers: function (query) {
    console.log(query)
    return axios.get("/api/user", query);
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
