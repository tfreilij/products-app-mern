var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController");

router.post("/login", usersController.login);
router.post("/register", usersController.register);

module.exports = router;