/**
 * A template-t és az adatokat felhhasználva elkészíti a weboldalakat
 */

const requireOption = require('./requireOption');

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName);
    };
};