const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Endpoints: /api/user
router.route("/")
    .post(userController.create)
    .get(userController.findOne);

// Endpoints: /api/user/:id
router.route("/:id")
    .get(userController.findById)
    .put(userController.update);

module.exports = router;