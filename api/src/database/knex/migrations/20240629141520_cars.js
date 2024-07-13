
exports.up = knex => knex.schema.createTable('cars', table => {

  table.increments('idCars').primary();
  table.string('name');
  table.decimal('engineType');
  table.string('plate');
  table.string('color');
  table.integer('model');
  table.string('avatar');
  table.integer('carType'); // 0-hat, 1-sedan, 2-suv
  
  table.timestamp('created').default(knex.fn.now());
  table.timestamp('updated').default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('cars');
