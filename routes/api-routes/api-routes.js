var express = require('express');
var router = express.Router();
var db = require('../../Models');
var passport = require('passport');
// require('../../config/passport')(passport);
// var bcrypt = require('bcrypt-nodejs');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');

router.get('/test', function(req, res) {
    res.send("hello")
})

module.exports = router;