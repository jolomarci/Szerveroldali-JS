/**
 * Kosárhoz hozzáad egy alkatrészt
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (res.locals.part === 'undefined')
            return next();

        if (true) {
            if (res.locals.part.inCart === false) {
                res.locals.part.inCart = true;
                res.locals.part.quantity = req.body.quantity;
            }
            else if (res.locals.part.inCart === true) {
                res.locals.part.quantity += req.body.quantity;
            }

            res.locals.part.save(err => {
                if (err) return next(err);

                console.log("cart updated");
                return res.redirect("/part/" + res.locals.part._carid);
            })
        }
        res.locals.error = "Zero quantity error";
        return next();
    };
};