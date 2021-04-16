const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const sportRoutes = require("./sport");


// user routes
router.use("/user", userRoutes);

// sport routes
router.use("/sport", sportRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
module.exports = router;
