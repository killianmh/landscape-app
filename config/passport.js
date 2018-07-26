let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// Import db models
let db = require('../Models');

// Create new instance of passport strategy and check database to find user with matching password
// JWT secret is stored on Heroku in the process.env variable
module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = process.env.landscapeSecret;
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