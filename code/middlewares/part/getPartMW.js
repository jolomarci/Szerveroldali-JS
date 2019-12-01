/**
 * Egy adott alkatrész lekérése szerkesztéshez, törléshez stb...
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        console.log("mivan itt");
        partModel.findOne({ _id: req.params.partid }, (err, part) => {
            if (err) {
                console.log("és itt");
                return next(err);
            }

            console.log("na de itt");
            res.locals.part = part;
            return next();
        });
    }
};