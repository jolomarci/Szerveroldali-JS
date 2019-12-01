const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.body.quantity === 'undefined') {
            console.log("no kvantiti")
            return next();
        }

        if (req.body.quantity == 0) {
            console.log("zero error");
            res.locals.error = "Zero quantity error";
            return next();
        }

        else {
            console.log("okés báttya " + req.body.quantity);
            return next();
        }
    };
};