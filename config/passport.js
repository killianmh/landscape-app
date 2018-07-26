let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// Import db models
let db = require('../Models');
let settings = require('../config/settings');

// Create new instance of passport strategy and check database to find user with matching password
module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        db.User.findOne({
            where: {
                id: jwt_payload.id
            }
        })
        .then(function(user) {
            // If user object does not exist, there was an error in db query
            if(!user) {
                return done(null, false);
            }
            // Successful authentication; user found and returned
            if(user) {
                return done(null, user);
            }
            // For all other cases, authentication fails
            else {
                return done(null, false);
            }
        })
    }))
}