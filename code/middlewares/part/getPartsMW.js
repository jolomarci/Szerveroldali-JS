/**
 * Adott kocsi id-hez tartozó összes alkatrész listázása
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
    
        if (typeof req.params.carid === 'undefined') {
            console.log(req.params.carid);
            partModel.find({}, (err, parts) => {
                if (err) return next(err);
                
                console.log("parts found");
                res.locals.parts = parts;
                return next();
            })
        }
        else {
            partModel.find({_carid: req.params.carid}, (err, parts) => {
                if (err) return next(err);

                
                console.log(parts);
                if(parts.length === 0){
                    res.locals.error = "no parts found";
                    res.locals.parts = parts;
                    console.log(res.locals.error);
                    return next();
                }
                
                console.log("parts for car found");
                res.locals.parts = parts;
                return next();
            });
        }
    }
}