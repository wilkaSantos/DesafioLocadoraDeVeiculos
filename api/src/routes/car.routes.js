const { Router } = require('express');
const multer = require('multer');
const CarControllers = require('../controllers/carControllers');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const AvatarControllers = require('../controllers/avatarControllers');
const uploadConfig = require('../configs/upload');

const carRoute = Router();
const carControll = new CarControllers();
const avatarControll = new AvatarControllers();
const upload = multer(uploadConfig.Multer);

carRoute.use(ensureAuthenticated);
carRoute.post('/create', carControll.create);
carRoute.post('/update', carControll.update);
carRoute.get('/index', carControll.index);
carRoute.get('/show', carControll.show);
carRoute.patch('/image/:idCars', ensureAuthenticated, upload.single('image'), avatarControll.updateCar);

module.exports = carRoute;