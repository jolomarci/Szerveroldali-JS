/**
 * Egy adott autó lekérése valamilyen id alapján szerkesztéshez, törléshez stb...
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        //ha nem érkezik márka paraméter akkor listázzuk az összeset
        if (req.params.brandid === undefined) {
            carModel.find({}, (err, car) => {
                if (err) {
                    return next(err);
                }

                res.locals.car = car;
                return next();
            })
        }
        //ha pedig meg van adva márka paraméter akkor pedig csak azt listázzuk
        else {
            var brand = req.params.brandid;
            brand = brand.charAt(0).toUpperCase() + brand.slice(1);
            carModel.find({ carbrand: brand }, (err, car) => {
                if (err) {
                    return next(err);
                }

                res.locals.car = car;
                return next();
            })
        }
    }
};