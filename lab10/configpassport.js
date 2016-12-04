var passport = require('passport');
const UserData = require('./data');
var LocalStrategy = require('passport-local').Strategy;

const constructorMethod = ()=> {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            UserData.findtestY().then(res => {
                console.log('user test found :');
                console.log(res);
                return done(null, res);
            });
        }
    ));


    passport.serializeUser(function(user, cb) {
        cb(null, user._id);
    });

    passport.deserializeUser(function(id, cb) {
        UserData.findById(id).then(res => {
            cb(null, res);
        }).catch(err => {
            cb(err, null);
        });
    });
};

module.exports = constructorMethod;