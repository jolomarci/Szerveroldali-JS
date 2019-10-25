/**
 * Jelszó ellenőrzése.
 *      ha a jelszó nem lett kitöltve -> next()
 *      ha a jelszó megfelelő továbbítás az admin pagere
 *      ha a jelszó hibás a res.locals-nak átadunk egy error üzenetet
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'szilvasbukta') {
            req.session.loggedin = true;
            return req.session.save(err => res.redirect('/admin'));
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};