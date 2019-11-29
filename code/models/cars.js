const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car', {
    carbrand : String,
    model : String,
    year : Number
})

module.exports = Car;