const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

// Routes
// Method - get
router.post("/login", loginController);

// Method - post
router.post("/register", registerController);

module.exports = router;