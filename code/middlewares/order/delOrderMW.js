/**
 * Egy megrendelés törlése
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        if (typeof res.locals.order === 'undefined')
            return next();

        res.locals.order.remove(err => {
            console.log('order deleted')
            if (err) return next(err);

            return res.redirect("/admin");
        });
    };
}