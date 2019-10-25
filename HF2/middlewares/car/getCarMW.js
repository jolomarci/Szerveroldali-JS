/**
 * Ha nincs megadva a márka -> összes autó betöltése 
 * Ha megvan adva -> adott márkájú autók betöltése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        /*
            if(req.param('brandid')==='undefined')
                összes autó betöltése
            if(req.param('brandid')=='opel')
                opel kocsik betöltése
        */
        return next();
    };
};