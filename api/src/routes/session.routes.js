const { Router } = require('express');
const SessionsControllers = require('../controllers/sessionsControllers');

const sessionRoute = Router();
const sessionControll = new SessionsControllers();

sessionRoute.post('/', sessionControll.create);

module.exports = sessionRoute;