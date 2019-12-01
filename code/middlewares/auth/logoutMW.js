/**
 * Kijelentkezteti a felhasználót (törli a sessiont)
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        req.session.destroy();
        console.log("logged out");
        return res.redirect('/')
    };
};