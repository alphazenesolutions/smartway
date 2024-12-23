var express = require('express');
var app = express();

const { check, validationResult } = require('express-validator');
exports.test = (req, res) => {
    res.render("test")
}

exports.saveData = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).jsonp(errors.array());
    } else {
        res.send({ "ok": 123 });
    }
}