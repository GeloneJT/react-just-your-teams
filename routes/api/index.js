const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const sportRoutes = require("./sport");
const passport = require("../../passport");

// user routes
router.use("/user", userRoutes);

// signup route
router.use("/signup", signupRoutes);

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("POST /api/login - req.user: ", req.user);
  const userInfo = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.json(userInfo);
});

router.get("/login", (req, res) => {
  console.log("GET /api/login, req.user: ", req.user);
  if (!req.user) {
    console.log("req.user does not exist");
    res.send("Not logged in yet");
  } else {
    return res.json(req.user.name);
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ message: "Logged out" });
  } else {
    res.send({ message: "Not signed in" });
  }
});

// sport Routes
router.use("/sport", sportRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
