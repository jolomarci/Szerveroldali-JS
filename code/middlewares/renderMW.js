/**
 * A template-t és az adatokat felhhasználva elkészíti a weboldalakat
 */

const requireOption = require('../middlewares/requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        if (req.session.loggedin === 'undefined' || req.session.loggedin === false) {
            res.locals.loggedin = false;
        }
        else {
            res.locals.loggedin = req.session.loggedin;
        }
        res.render(viewName);
    };
};