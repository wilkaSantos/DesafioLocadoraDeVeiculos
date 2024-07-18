const { Router } = require('express');
const SessionsControllers = require('../controllers/SessionsControllers');

const sessionRoute = Router();
const sessionControll = new SessionsControllers();

sessionRoute.post('/', sessionControll.create);

module.exports = sessionRoute;