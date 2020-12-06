var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController");

router.post("/login", usersController.login);
router.post("/registration", usersController.registration);

module.exports = router;