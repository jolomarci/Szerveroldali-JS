/**
 * Ha az admin be van lépve hívjon next-et, ha nincs irányítsa át a /-ra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (!req.session.loggedin || req.session.loggedin !== true) {
            return res.redirect('/login');
        }

        return next();
    };
};