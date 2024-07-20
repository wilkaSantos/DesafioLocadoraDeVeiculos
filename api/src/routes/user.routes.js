const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const UserControllers = require('../controllers/userControllers');
const AvatarControllers = require('../controllers/avatarControllers');
const uploadConfig = require('../configs/upload');
const { Router } = require('express');
const multer = require('multer');

const userRoute = Router();
const userControll = new UserControllers();
const avatarControll = new AvatarControllers();

const upload = multer(uploadConfig.Multer);

userRoute.post('/create', userControll.create);
userRoute.put('/update/:idUser', ensureAuthenticated, userControll.update);
userRoute.get('/index', userControll.index);
userRoute.patch('/avatar/:idUser', ensureAuthenticated, upload.single('avatar'), avatarControll.updateUser);

module.exports = userRoute;