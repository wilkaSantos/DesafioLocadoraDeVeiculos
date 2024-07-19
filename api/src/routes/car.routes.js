const CarControllers = require('../controllers/carControllers');
const { Router } = require('express');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const carControll = new CarControllers();
const carRoute = Router();

carRoute.use(ensureAuthenticated);
carRoute.post('/create', carControll.create);
carRoute.post('/update', carControll.update);
carRoute.get('/index', carControll.index);
carRoute.get('/show', carControll.show);

module.exports = carRoute;