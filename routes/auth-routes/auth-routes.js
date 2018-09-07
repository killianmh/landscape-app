var express = require('express');
var router = express.Router();
var db = require('../../Models');
var passport = require('passport');
// require('../../config/passport')(passport);
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Op = require('sequelize').Op;
var Sequelize = require('sequelize');

// Store saltRounds for use in bcrypt
const saltRounds = 10;

// Generate JWT token (only call this after authenticating user!!!)
const genJWT = function(user) {
    const JWTToken = jwt.sign(
            user.toJSON(),
            process.env.landscapeSecret,
        {
            expiresIn: '1h'
        });
    return res.status(200).json({
        success: true,
        token: JWTToken
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
    let newUserType = req.body.userData;

    if(missingData(newUserType)){
        console.log("missing user data")
        res.status(500).send('Please supply email and password!');
    }
    else{
        //Check to see if user exists
        db.User.findOne({
           where:{
               email: newUserType.email
           } 
        }).then(function(existingUser){
            if(existingUser === null){
                console.log("no existing user found")
                bcrypt.hash(newUserType.password, saltRounds, function(err, hash){
                    if(err){
                        return err;
                    }
                    else {
                        let newUser = {
                            email: newUserType.email,
                            password: hash,
                            userType: newUserType.userType
                        }
                        db.User.create(newUser).then(function(user){
                            genJWT(user);
                            res.status(200).json({
                                success: true,
                                message: 'Signup successful'
                            })
                        }).catch(function(error){
                            res.status(500).send(error)
                        })
                    }
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