const router = require("express").Router();
const sportController = require("../../controllers/sportController.js");

//endpoint /api/sport

router.route("/")
    .get(sportController.getSummarries);

module.exports = router;
