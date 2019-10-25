const authMW = require('../middlewares/auth/authMW')
const loginMW = require('../middlewares/auth/loginMW')
const renderMW = require('../middlewares/renderMW')
const getCarsMW = require('../middlewares/car/getCarsMW')
const getCarMW = require('../middlewares/car/getCarMW')
const saveCarMW = require('../middlewares/car/saveCarMW')
const delCarMW = require('../middlewares/car/delCarMW')
const getPartsMW = require('../middlewares/part/getPartsMW')
const getPartMW = require('../middlewares/part/getPartMW')
const savePartMW = require('../middlewares/part/PartCarMW')
const delPartMW = require('../middlewares/part/delPartMW')
const getCartMW = require('../middlewares/cart/getCartMW')
const getItemMW = require('../middlewares/cart/getItemMW')
const delItemMW = require('../middlewares/cart/delItemMW')
const getDataMW = require('../middlewares/order/getDataMW')
const saveDataMW = require('../middlewares/order/saveDataMW')
const getOrdersMW = require('../middlewares/admin/getOrdersMW')

module.exports = function (app) {
    const objRepo = {};

    // '/' route
    app.get('/');

    //auth route
    app.use('/auth',
    authMW(objRepo),
    loginMW(objRepo));

    //car routes
    app.get('/cars',
    getCarsMW(objRepo),
    renderMW(objRepo, 'carslist'));

    app.get('/car/:brandid',
    getCarsMW(objRepo),
    renderMW(objRepo, 'brandedcarlist'));

    app.use('/car/:brandid/new',
    authMW(objRepo),
    saveCarMW(objRepo),
    render(objRepo, 'careditnew'));

    app.use('/car/:brandid/edit/:carid',
    authMW(objRepo),
    getCarMW(objRepo),
    saveCarMW(objRepo),
    render(objRepo, 'careditnew'));

    app.use('/car/:brandid/del/:carid',
    authMW(objRepo),
    getCarMW(objRepo),
    delCarMW(objRepo));

    //part routes
    app.get('/part/:carid',
    getPartsMW(objRepo),
    renderMW(objRepo, 'partlist'));

    app.use('/part/:carid/new',
    authMW(objRepo),
    savePartMW(objRepo),
    delPartMW(objRepo));

    app.use('/part/:carid/edit/:partid',
    authMW(objRepo),
    getPartMW(objRepo),
    savePartMW(objRepo));

    app.use('/part/:carid/del/:partid',
    authMW(objRepo),
    getPartMW(objRepo),
    delPartMW(objRepo));

    //cart routes
    app.get('/cart',
    getCartMW(objRepo),
    renderMW(objRepo, 'cartlist'));

    app.use('/cart/del',
    getItemMW(objRepo),
    delItemMW(objRepo));

    app.use('/order',
    getDataMW(objRepo),
    saveDataMW(objRepo),
    renderMW(objRepo, 'orderdata'));

    app.get('/admin',
    getOrdersMW(objRepo),
    renderMW(objRepo, 'orderlist'));



};
