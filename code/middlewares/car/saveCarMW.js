/**
 * új autó hozzáadása / meglévő felülírása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        if (typeof req.body.brandlist === 'undefined' ||
            typeof req.body.model === 'undefined' ||
            typeof req.body.year === 'undefined') {
            return next();
        }

        if (typeof res.locals.car === 'undefined') {
            res.locals.car = new carModel();
            console.log("new car created");
        }
        if (req.body.brandlist === null ||
            req.body.model === "" ||
            req.body.year === null) {
                return next();
        }
        console.log("model: " + req.body.model);
        res.locals.car.carbrand = req.body.brandlist;
        res.locals.car.model = req.body.model;
        res.locals.car.year = req.body.year;

        res.locals.car.save(err => {
            if (err) return next(err);

            console.log("car saved");
            return res.redirect('/car/' + res.locals.car.carbrand);
        })
    };
};