var express = require('express');
var router = express.Router();
var db = require('../../Models');
var passport = require('passport');
// require('../../config/passport')(passport);
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');

// Encrypt password using async method
const saltRounds = 10;
const generateHash = function(password) {
    return bcrypt.hash(password, saltRounds, function(err, hash) {
        if(err){
            return err;
        }
        else {
            return hash;
        }
    })
}

// Validate password

// Get JWT Token

// General route to authenticate JWT for protected React Router Routes

// Check for empty values in data object in request
const missingData = function (object) {
    for(var key in object) {
        if(object[key] == null || object[key] == "" ){
            return true
        }
    }
    return false
}

// Signup Route
router.post('/signup', function(req, res){
    let newUser = req.body.userData;
    if(missingData(newUser)){
        res.status(500).send('Please supply email and password!');
    }
    else{
        newUser.password = generateHash(newUser.password);

        //Check to see if user exists
        db.User.findOne({
           where:{
               email: newUser.email
           } 
        }).then(function(existingUser){
            if(existingUser === null){
                db.User.create(newUser).then(function(user){
                    res.status(200).json({
                        success: true,
                        message: 'Signup successful'
                    })
                }).catch(function(error){
                    res.status(500).send(error)
                })
            }
            else {
                res.status(500).json({
                    success: false,
                    message: 'User already exists'
                })
            }
        }).catch(function(error){
            res.status(500).send(error)
        })
    }
    
})

module.exports = router;