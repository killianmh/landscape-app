var express = require('express');
var router = express.Router();
var db = require('../../Models');
var passport = require('passport');
// require('../../config/passport')(passport);
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');

// Encrypt password using async method
const saltRounds = 10;
const generateHash = function(password) {
    return bcrypt.hash(password, saltRounds, function(err, hash) {
        return hash;
    })
}

// Validate password

module.exports = router;