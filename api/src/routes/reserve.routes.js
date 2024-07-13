const { Router } = require('express');
const reserveControllers = require('../controllers/reserveControllers');

const reserveRoute = Router();
const reserveControll = new reserveControllers();

reserveRoute.post('/create', reserveControll.create);
reserveRoute.post('/update/:idReserve', reserveControll.update);
reserveRoute.get('/index', reserveControll.index);

module.exports = reserveRoute;