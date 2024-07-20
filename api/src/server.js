require('dotenv/config');
const uploadConfig = require('./configs/upload');
const database = require('../src/database/knex');
const routes = require('./routes');
const express = require('express');
const cors = require('cors');

const api = express();
const port = process.env.port;

api.use('/files', express.static(uploadConfig.uploadFolder));
api.use(express.json());
api.use(routes);
api.use(cors());
database();

api.listen(port, ()=> console.log(`Application it's running in the port: ${port}.`));