const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const sportRoutes = require("./sport");
const passport = require("../../passport");
const signupRoutes = require("./signup");


// user routes
router.use("/user", userRoutes);

// sport routes
router.use("/sport", sportRoutes);

// signup route
router.use("/signup", signupRoutes);

// login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("POST /api/login - req.user: ", req.user);
  const userInfo = {
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    about_me: req.user.about_me,
    sport: req.user.sport,
    league: req.user.league,
    team: req.user.team
  };
  res.json(userInfo);
});

router.get("/login", (req, res) => {
  console.log("GET /api/login, req.user: ", req.user);
  if (!req.user) {
    console.log("req.user does not exist");
    res.send("Not logged in yet");
  } else {
    return res.json(req.user);
  }
});

// logout route
router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ message: "Logged out" });
  } else {
    res.send({ message: "Not signed in" });
  }
});






module.exports = router;
