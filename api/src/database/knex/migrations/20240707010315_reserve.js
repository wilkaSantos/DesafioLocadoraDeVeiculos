exports.up = knex => knex.schema.createTable('reserve', (table)=>{
  
  table.increments('idReserve').primary();
  table.integer('idUser').references('idUser').inTable('users');
  table.integer('idCars').references('idCars').inTable('cars');
  table.integer('qtd');
  table.integer('period');
  table.decimal('vlrRent');
  table.date('dateWithdraw'); // dataRetirada
  table.date('dateDelivery'); //dataEntrega
  table.integer('paymentMethod'); // 0-CREDITO, 1-DEBITO, 2-DINHEIRO, 3-PIX
  table.integer('situation'); //0-RESERVADO, 1-EM ANDAMENTO, 2-CONCLUÍDO
  table.integer('paymentStatus'); //0-PENDENTE, 1-PAGO

  table.timestamp('created').default(knex.fn.now());
  table.timestamp('updated').default(knex.fn.now());

});

exports.down = knex => knex.schema.dropTable('reserve');
