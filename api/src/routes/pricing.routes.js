const { Router } = require('express');
const PricingControllers = require('../controllers/pricingControllers');

const pricingRoute = Router();
const pricingControll = new PricingControllers();

pricingRoute.post('/create', pricingControll.create);
pricingRoute.post('/update/:idPricing', pricingControll.update);
pricingRoute.get('/index', pricingControll.index);

module.exports = pricingRoute;