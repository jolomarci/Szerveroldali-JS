
const express = require('express');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(session({
    secret: 'sajt',
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000
    },
    resave: true,
    saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./route/index')(app);
app.listen(3000, function () {
    console.log('Hello :3000');
});