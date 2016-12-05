const UserData = require('../data');
var passport = require('passport');



const constructorMethod = (app) => {
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/private',
            failureRedirect: '/',
            failureFlash: true
        })
    );

    app.get('/private',
        require('connect-ensure-login').ensureLoggedIn(),
        function(req, res) {
            res.render('partials/private', {
                user: req.user
            })
        });

    app.get('/', (req, res) => {
        if (req.user) {
            console.log('redirecting to /private');
            console.log('usr is ')
            console.log(req.user);
            res.redirect('/private');
        } else {
            console.log('rendering the form');

            res.render('partials/loginform', {
                message: req.flash('message')
            });
        }

    });

    app.get('/logout',
        function(req, res) {
            req.logout();
            res.redirect('/');
        });

    



    app.use("*", (req, res) => {
        res.sendStatus(404);
    });
};

module.exports = constructorMethod;