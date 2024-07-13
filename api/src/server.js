require('dotenv/config');
const routes = require('./routes');
const database = require('../src/database/knex');
const express = require('express');
const cors = require('cors');

const api = express();
const port = process.env.port;

api.use(express.json());
api.use(routes);
api.use(cors());
database();

api.listen(port, ()=> console.log(`Application it's running in the port: ${port}.`));