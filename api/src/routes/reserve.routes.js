const { Router } = require('express');
const reserveControllers = require('../controllers/reserveControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const reserveRoute = Router();
const reserveControll = new reserveControllers();

reserveRoute.post('/create', ensureAuthenticated, reserveControll.create);
reserveRoute.post('/update/:idReserve', ensureAuthenticated, reserveControll.update);
reserveRoute.get('/index', ensureAuthenticated, reserveControll.index);

module.exports = reserveRoute;