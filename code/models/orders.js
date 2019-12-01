const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Order = db.model('Order', {
    price : Number,
    name : String,
    email: String,
    
    city: String,
    county: String,
    postcode: Number,
    address: String,

    cardname: String,
    cardnum: Number,
    date: String,
    code: Number 
})

module.exports = Order;