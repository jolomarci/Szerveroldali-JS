/**
 * Egy adott alkatrész törlése
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.part === 'undefined')
            return next();

        res.locals.part.remove(err=>{
            console.log('part deleted')
            if(err)
                return next(err);
            
            return res.redirect('/part/' + res.locals.car._id);
        })
    };
};