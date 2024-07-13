
exports.up = knex => knex.schema.createTable('users', table => {

  table.increments('idUser').primary();
  table.integer('userType'); // 0-Admin, 1-Funcionario, 2-Cliente
  table.string('name');
  table.string('cfpCnpj');
  table.string('email');
  table.string('phone');
  table.string('password');
  table.string('avatar');
  table.string('road');
  table.integer('number');
  table.string('district');
  table.string('county');
  table.string('state');

  table.timestamp('created').default(knex.fn.now());
  table.timestamp('updated').default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('users');
