/**
 * Admin számára listázza a leadott rendeléseket
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const orderModel = requireOption(objectrepository, 'orderModel');

    return function (req, res, next) {
        if (req.params.brandid === undefined) {
            orderModel.find({}, (err, order) => {
                if (err) {
                    return next(err);
                }

                res.locals.order = order;
                return next();
            })
        }
    };
};