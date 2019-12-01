/**
 * Autó törlése id alapján
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) { 
   // const carModel = requireOption(objectrepository, 'carModel');

    return function (req, res, next) {
        if(typeof res.locals.car === 'undefined')
            return next();

        res.locals.car.remove(err=>{
            console.log('car deleted')
            if(err)
                return next(err);
            
            if(req.params.brandid === 'undefined')
                return res.redirect('/car');
            else
                return res.redirect('/car/' + req.params.brandid);
        })
    };
};