const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Part = db.model('Part', {
    partBrand : String,
    partType : String,
    price : Number,
    comment : String,
    inCart: Boolean,    //a kosárba művelet ezt állítja majd be
    quantity: Number,   //hány darab van a kosárba
    _carid: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    } 
})

module.exports = Part;