
exports.up = knex => knex.schema.createTable('pricing', table => {

  table.increments('idPricing').primary();
  table.integer('carType');
  table.integer('periodType');
  table.decimal('periodValue');
  table.timestamp('created').default(knex.fn.now());
  table.timestamp('updated').default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('pricing');