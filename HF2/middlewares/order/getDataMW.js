/**
 * Megrendelő oldalon visszatölti a régebben begépelt adatokat, ha volt ilyen
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
};