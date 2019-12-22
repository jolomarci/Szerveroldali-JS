/**
 * Jelszó ellenőrzése.
 *      ha a jelszó nem lett kitöltve -> next()
 *      ha a jelszó megfelelő továbbítás az admin pagere
 *      ha a jelszó hibás a res.locals-nak átadunk egy error üzenetet
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("csekk");
        if (typeof req.body.password === 'undefined') {
            console.log("no pw");
            return next();
        }

        else if (req.body.password !== 'szilvasbukta' || req.body.email !== "example@email.com") {
            res.locals.error = 'Hibás jelszó!';
            console.log("wrong pw or email");
            return next();
        }

        else if (req.body.password === 'szilvasbukta' || req.body.email == "example@email.com") {
            console.log("successful login");
            req.session.loggedin = true;
            return req.session.save(err => res.redirect('/admin'));
        }

        else {
            return next();
        }
    };
};