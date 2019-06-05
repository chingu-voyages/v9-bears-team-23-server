
exports.up = function(knex, Promise) {
  return knex.schema.createTable('language', (table)=>{
    table.increments();
    table.string('name',50);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('language');
};
