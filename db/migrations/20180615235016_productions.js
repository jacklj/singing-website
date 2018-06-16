
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('productions', function(table){
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('url');
      table.string('copy');
      table.string('my_role');
    }),
    knex.schema.createTable('shows', function(table){
      table.increments('id').primary();
      table.dateTime('start').notNullable();
      table.dateTime('end');
      table.integer('production_id').references('productions.id');
      table.integer('venue_id').references('venues.id');
    }),
    knex.schema.createTable('venues', function(table){
      table.increments('id').primary();
      table.string('venue_name');
      table.string('venue_address');
      table.string('venue_website');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('productions'),
    knex.schema.dropTable('shows'),
    knex.schema.dropTable('venues')
  ]);
};
