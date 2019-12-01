/**
 * Egy megrendelés törlése
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        if (typeof res.locals.order === 'undefined')
            return next();

        res.locals.order.remove(err => {
            if (err) return next(err);

            console.log('order deleted')
            return res.redirect("/admin");
        });
    };
}