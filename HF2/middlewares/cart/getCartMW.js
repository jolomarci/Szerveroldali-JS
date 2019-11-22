/**
 * Kosár tartalmának listázása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');
    //var cartSum = 0;
    return function (req, res, next) {
        partModel.find({ inCart: true }, (err, part) => {
            if (err) {
                return next(err);
            }
            res.locals.cartSum  += part.price;
            res.locals.part = part;
            return next();
        })
    };
};