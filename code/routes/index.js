const authMW = require('../middlewares/auth/authMW')
const inverseAuthMW = require('../middlewares/auth/inverseAuthMW')
const loginMW = require('../middlewares/auth/loginMW')
const logoutMW = require('../middlewares/auth/logoutMW')
const renderMW = require('../middlewares/renderMW')
const getCarsMW = require('../middlewares/car/getCarsMW')
const getCarMW = require('../middlewares/car/getCarMW')
const saveCarMW = require('../middlewares/car/saveCarMW')
const delCarMW = require('../middlewares/car/delCarMW')
const getPartsMW = require('../middlewares/part/getPartsMW')
const getPartMW = require('../middlewares/part/getPartMW')
const savePartMW = require('../middlewares/part/savePartMW')
const delPartMW = require('../middlewares/part/delPartMW')
const getCartMW = require('../middlewares/cart/getCartMW')
const getItemMW = require('../middlewares/cart/getItemMW')
const delItemMW = require('../middlewares/cart/delItemMW')
const getOrderMW = require('../middlewares/order/getOrderMW')
const saveOrderMW = require('../middlewares/order/saveOrderMW')
const delOrderMW = require('../middlewares/order/delOrderMW')
const getOrdersMW = require('../middlewares/admin/getOrdersMW')

const carModel = require('../models/cars');
const partModel = require('../models/parts');
const orderModel = require('../models/orders');

module.exports = function (app) {
    const objRepo = {
        carModel: carModel,
        partModel: partModel,
        orderModel: orderModel
    };

    //auth routes

    app.get('/auth',
        authMW(objRepo));

    app.get('/login',
        inverseAuthMW(objRepo),
        renderMW(objRepo, 'login'));

    app.post('/login',
        loginMW(objRepo));

    app.get('/logout',
        logoutMW(objRepo));

    //car routes

    app.use('/car/:brandid/new',
        authMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'careditnew'));

    app.use('/car/:brandid/edit/:carid',
        authMW(objRepo),
        getCarMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'careditnew'));

    app.use('/car/:brandid/del/:carid',
        authMW(objRepo),
        getCarMW(objRepo),
        delCarMW(objRepo));

    app.get('/car/:brandid',
        getCarsMW(objRepo),
        renderMW(objRepo, 'carlist'));

    app.get('/car',
        getCarsMW(objRepo),
        renderMW(objRepo, 'carlist'));

    //part routes

    app.use('/part/:carid/new',
        authMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, 'parteditnew'));

    app.use('/part/:carid/edit/:partid',
        authMW(objRepo),
        getPartMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, 'parteditnew'));

    app.use('/part/:carid/del/:partid',
        authMW(objRepo),
        getPartMW(objRepo),
        delPartMW(objRepo));

    app.get('/part/:carid',
        getPartsMW(objRepo),
        renderMW(objRepo, 'partlist'));

    app.get('/part',
        getPartsMW(objRepo),
        renderMW(objRepo, 'partlist'));

    //cart routes
    app.use('/cart/del/:partid',
        getItemMW(objRepo),
        delItemMW(objRepo));

    app.use('/cart/new/:partid',
        getItemMW(objRepo),
        delItemMW(objRepo));

    app.get('/cart',
        getCartMW(objRepo),
        renderMW(objRepo, 'cartlist'));

    //order routes
    app.use('/order/del/:orderid',
        getOrderMW(objRepo),
        delOrderMW(objRepo));

    app.use('/order',
        saveOrderMW(objRepo),
        renderMW(objRepo, 'orderform'));

    //admin routes
    app.get('/admin',
        authMW(objRepo),
        getOrdersMW(objRepo),
        renderMW(objRepo, 'orderlist'));

    // '/' routes
    app.get('/',
        renderMW(objRepo, 'index'));

};
