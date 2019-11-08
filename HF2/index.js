const express = require('express');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(session({
    secret: 'sajt',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.locals.loggedin = req.session.loggedin;
    next();
});

require('./routes/index')(app);
app.listen(3000, function () {
    console.log('Hello :3000');
});