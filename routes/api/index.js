const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const sportRoutes = require("./sport");
const passport = require("../../passport");
const signupRoutes = require("./signup");

// user routes
router.use("/user", userRoutes);

// signup route
router.use("/signup", signupRoutes);

// login route
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
    return res.json(req.user.username);
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

// sport Routes
// router.use("/sport", sportRoutes);


module.exports = router;
