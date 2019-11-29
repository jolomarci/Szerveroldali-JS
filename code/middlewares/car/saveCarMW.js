/**
 * új autó hozzáadása / meglévő felülírása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    //const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        next();
    };
};