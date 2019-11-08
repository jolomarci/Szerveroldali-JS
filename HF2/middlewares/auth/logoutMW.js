const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res) {
        req.session.destroy();
        return res.redirect('/')
    };
};