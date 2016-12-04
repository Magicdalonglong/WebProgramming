const express = require("express");
const bodyParser = require("body-parser");
var passport = require('passport');
const UserData = require('./data');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
    function(username, password, done) {
        UserData.findOne(username,password).then(res => {
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





const app = express();

const static = express.static(__dirname + '/public');

const configRoutes = require("./routes");

const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    },
    partialsDir: [
        'views/partials/'
    ]
});

const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    // If the user posts to the server with a property called _method, rewrite the request's method
    // To be that method; so if they post _method=PUT you can now allow browsers to POST to a route that gets
    // rewritten in this middleware to a PUT route
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
};

app.use(function(req, res, next) {
    console.log('req.method and url  is ' + req.method + " " + req.url);
    next();
})

app.use(require('connect-flash')());
app.use(require('cookie-parser')());


app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.use("/public", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(rewriteUnsupportedBrowserMethods);

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});