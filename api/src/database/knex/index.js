const connectionConfiguration = require('../../../knexfile');
const knex = require('knex');

const connect = knex(connectionConfiguration.development);
module.exports = connect;