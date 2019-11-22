/**
 * Egy adott alkatrész lekérése szerkesztéshez, törléshez stb...
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        partModel.findOne({ _id: req.params.partid }, (err, part) => {
            if (err || !part) {
                return next(err);
            }

            res.locals.part = part;
            return next();
        });
    }
};