const { Router } = require('express');
const pricingRoutes = require('./pricing.routes');
const reserveRoutes = require('./reserve.routes');
const userRoutes = require('./user.routes');
const carRoutes  = require('./car.routes');
const routes = Router();

routes.use('/users', userRoutes);
routes.use('/cars', carRoutes);
routes.use('/pricing', pricingRoutes);
routes.use('/reserve', reserveRoutes);

module.exports = routes;