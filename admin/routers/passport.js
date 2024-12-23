var express = require('express');
var router = express.Router()
var passportcontroller = require("../controller/passportcontroller");

router.get("/", passportcontroller.passport)


module.exports = router