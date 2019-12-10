/**
 * Ha nincs megadva a márka -> összes autó betöltése 
 * Ha megvan adva -> adott márkájú autók betöltése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        if (typeof req.params.carid !== 'undefined') {
            carModel.findOne({ _id: req.params.carid }, (err, car) => {
                if (err || !car) return next(err);

                console.log("car found");
                res.locals.car = car;
                return next();
            });
        } else if (typeof res.locals.part !== 'undefined') {
            carModel.findOne({ _id: res.locals.part._carid }, (err, car) => {
                if (err || !car) return next(err);

                console.log("car found");
                res.locals.car = car;
                return next();
            });
        }
    }
};