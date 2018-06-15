
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table){
    table.increments();
    table.string('name').notNullable();
    table.dateTime('start').notNullable();
    table.dateTime('end');
    table.string('venue_name');
    table.string('venue_address');
    table.string('venue_website');
    table.string('copy');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
