/**
 * Kosár tartalmából egy elem törlése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (res.locals.part === 'undefined'){
            console.log("cant delete item");
            return next();
        }

        res.locals.part.inCart = false;
        res.locals.part.quantity = 0;

        res.locals.part.save(err =>{
            if (err) return next(err);

            console.log("cart item deleted");
            res.redirect("/cart");
        })
    };
};