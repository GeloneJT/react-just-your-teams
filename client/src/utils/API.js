import axios from "axios";

export default {
  schedule: function (q) {
    console.log('SCHEDULE QUERY: ', q)
    return axios.get("/api/sport", { params: { q: "competitor:" + q } });
  },
  
  login: function (user) {
    console.log("api/login/: POST: ", user.email);
    return axios.post("/api/login/", user);
  },

  getUser: function (user) {
    console.log("api/login/: GET: ", user)
    return axios.get("/api/login/", user);
  },

  logout: function (user) {
    console.log("api/logout/ POST:", user)
    return axios.post("/api/logout/", user);
  },

  getUsers: function (query) {
    console.log(query);
    return axios.get("/api/user", query);
  },

  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },

  saveUser: function (userData) {
    console.log(userData);
    return axios.post("/api/user", userData);
  },

  updateProfile: function (userData) {
    console.log(`api/user ${userData}`);
    return axios.put("/api/user", userData);
  }
};
