const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const UserControllers = require('../controllers/userControllers');
const { Router } = require('express');

const userControll = new UserControllers;
const userRoute = Router();

userRoute.post('/create', userControll.create);
userRoute.put('/update/', ensureAuthenticated, userControll.update);
userRoute.get('/index', userControll.index);

module.exports = userRoute;