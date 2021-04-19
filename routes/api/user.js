const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Endpoints: /api/user
router
  .route("/")
  .post(userController.create)
  .put(userController.update)
  .get(userController.findOne);


module.exports = router;