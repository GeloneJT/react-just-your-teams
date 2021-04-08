let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/jytDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const userSeed = [
  {
    username: "daveyrojo",
    email: "dave@gmail.com",
    about_me: "I love soccer!",
    sport: "Soccer",
    league: "English Premier League",
    team: "Everton FC",
    password: "password123",
  },
  {
    username: "bobrossrules",
    email: "bobbyboi@gmail.com",
    about_me: "I paint better than Messi plays footy!",
    sport: "Soccer",
    league: "English Premier League",
    team: "Manchester United FC",
    password: "idk123456789",
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
