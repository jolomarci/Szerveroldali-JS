/**
 * Egy adott alkatrész lekérése szerkesztéshez, törléshez stb...
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        partModel.findOne({ _id: req.params.partid }, (err, part) => {
            if (err) {
                return next(err);
            }

            console.log("part found");
            res.locals.part = part;
            return next();
        });
    }
};