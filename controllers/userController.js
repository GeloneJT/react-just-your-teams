const db = require("../models/index.js");

//find one not receiving data from login
module.exports = {
  findAll: function (req, res) {
      db.User.find({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },  
  create: function (req, res) {
    console.log("POST: CREATE");
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log("Get: FIND ONE")
    db.User.find({email: req.params.email, password: req.params.password})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("PUT: UPDATE");
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
