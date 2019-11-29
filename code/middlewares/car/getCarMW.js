/**
 * Ha nincs megadva a márka -> összes autó betöltése 
 * Ha megvan adva -> adott márkájú autók betöltése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        carModel.findOne({ _id: req.params.carid }, (err, car) => {
            if (err || !car) {
                return next(err);
            }

            res.locals.car = car;
            return next();
        });
    }
};