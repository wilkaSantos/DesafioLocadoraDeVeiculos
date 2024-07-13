const CarControllers = require('../controllers/carControllers');
const { Router } = require('express');

const carControll = new CarControllers();
const userRoute = Router();

userRoute.post('/create', carControll.create);
userRoute.post('/update', carControll.update);
userRoute.get('/index', carControll.index);
userRoute.get('/show', carControll.show);

module.exports = userRoute;