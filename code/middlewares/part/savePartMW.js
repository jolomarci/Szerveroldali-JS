/**
 * Új alkatrész hozzáadása egy kocsihoz / meglévő alkatrész szerkesztése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        if (typeof req.body.partType === 'undefined' ||
            typeof req.body.partBrand === 'undefined' ||
            typeof req.body.comment === 'undefined' ||
            typeof req.body.price === 'undefined' ||
            typeof res.locals.car === 'undefined') {
            return next();
        }

        if (typeof res.locals.part === 'undefined') {
            res.locals.part = new partModel();
            console.log("new part created");
        }

        res.locals.part.partType = req.body.partType;
        res.locals.part.partBrand = req.body.partBrand;
        res.locals.part.comment = req.body.comment;
        res.locals.part.price = req.body.price;
        res.locals.part._carid = res.locals.car._id;
        res.locals.part.inCart = false;
        res.locals.part.quantity = 0;

        res.locals.part.save(err => {
            if (err) return next(err);
            
            console.log("part saved");
            return res.redirect('/part/' + res.locals.car._id)
        })

    };
}