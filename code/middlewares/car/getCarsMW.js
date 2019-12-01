/**
 * Egy adott autó lekérése valamilyen id alapján szerkesztéshez, törléshez stb...
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        //ha nem érkezik márka paraméter akkor listázzuk az összeset
        if (req.params.brandid === undefined) {
            carModel.find({}, (err, cars) => {
                if (err) {
                    return next(err);
                }

                console.log("cars found");
                res.locals.cars = cars;
                return next();
            })
        }
        //ha pedig meg van adva márka paraméter akkor pedig csak azt listázzuk
        else {
            var brand = req.params.brandid;
            brand = brand.charAt(0).toUpperCase() + brand.slice(1);
            carModel.find({ carbrand: brand }, (err, cars) => {
                if (err) {
                    return next(err);
                }
                console.log("branded cars found");
                res.locals.cars = cars;
                return next();
            })
        }
    }
};