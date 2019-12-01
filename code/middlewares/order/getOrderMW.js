/**
 * Megrendelő oldalon visszatölti a régebben begépelt adatokat, ha volt ilyen
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository, viewName) {
    const orderModel = requireOption(objectrepository, 'orderModel');
    return function (req, res, next) {
        orderModel.findOne({ _id: req.params.orderid }, (err, order) => {
            if (err) return next(err);

            res.locals.order = order;
            console.log("order found");
            return next();
        })
    };
}