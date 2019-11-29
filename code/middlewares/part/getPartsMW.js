/**
 * Adott kocsi id-hez tartozó összes alkatrész listázása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        partModel.find({}, (err, part) => {
            if (err) {
                return next(err);
            }

            res.locals.part = part;
            return next();
        })
    }
}