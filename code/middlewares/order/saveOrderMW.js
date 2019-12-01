/**
 * Elmenti a megrendelő oldalon beírt adatokat
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository, viewName) {
    const orderModel = requireOption(objectrepository, 'orderModel');
    const partModel = requireOption(objectrepository, 'partModel');

    return async function (req, res, next) {
        if (typeof req.body.name === 'undefined' ||
            typeof req.body.email === 'undefined'||
            typeof req.body.postcode === 'undefined' ||
            typeof req.body.address === 'undefined' ||
            typeof req.body.cardname === 'undefined'||
            typeof req.body.cardnum === 'undefined'||
            typeof req.body.cardname === 'date' ||
            typeof req.body.cardname === 'code'){
            return next();
        }
        res.locals.order = new orderModel();

        var cart = await partModel.find({ inCart: true }).exec();

        res.locals.order.price = cart.reduce((arr, currElem) => (arr += currElem.price * currElem.quantity), 0);
        res.locals.order.name = req.body.name;
        res.locals.order.email = req.body.email;

        res.locals.order.city = req.body.city;
        res.locals.order.county = req.body.county;
        res.locals.order.postcode = req.body.postcode;
        res.locals.order.address = req.body.address;

        res.locals.order.cardname = req.body.cardname;
        res.locals.order.cardnum = req.body.cardnum;
        res.locals.order.date = req.body.date;
        res.locals.order.code = req.body.code;

        res.locals.order.save(err => {
            if (err) return next(err);

            console.log("order saved");
            return res.redirect("/");
        })
    };
};