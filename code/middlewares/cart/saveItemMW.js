/**
 * Kosárhoz hozzáad egy alkatrészt
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const partModel = requireOption(objectrepository, 'partModel');

    return function (req, res, next) {
        if (res.locals.part === 'undefined') {
            console.log("valami");
            return next();
        }

        if (res.locals.error != 'Zero quantity error') {
            console.log("ez is valami");
            if (res.locals.part.inCart === false) {
                res.locals.part.inCart = true;
                res.locals.part.quantity = parseInt(req.body.quantity, 10);
            }
            else if (res.locals.part.inCart === true) {
                res.locals.part.quantity += parseInt(req.body.quantity, 10);
            }

            res.locals.part.save(err => {
                if (err) {
                    console.log("cart part save error");
                    return next(err);
                }

                console.log("cart updated");
                return res.redirect("/part/" + res.locals.part._carid);
            })
        }
        else {
            partModel.find({ _carid: res.locals.part._carid }, (err, parts) => {
                if (err) {
                    console.log("errror gecii bazdmeg");
                    return next(err);
                }

                res.locals.parts = parts;
                return next();
            });
        }
    };
};