/**
 * Adott kocsi id-hez tartozó összes alkatrész listázása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        /*if(typeof res.locals.part !== 'undefined'){
            console.log("miafaszvan" + res.locals.part);
            partModel.find({_carid: res.locals.part._carid}, (err, parts) => {
                if (err) {
                    return next(err);
                }

                res.locals.parts = parts
                return next();
            });
        }*/
        if (req.params.carid !== 'undefined') {
            partModel.find({_carid: req.params.carid}, (err, parts) => {
                if (err) {
                    return next(err);
                }

                res.locals.parts = parts;
                return next();
            })
        }
        else {
            partModel.find({}, (err, parts) => {
                if (err) {
                    return next(err);
                }

                res.locals.parts = parts;
                return next();
            });
        }
    }
}