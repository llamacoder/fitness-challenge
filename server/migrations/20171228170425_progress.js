
exports.up = function(knex, Promise) {
  return knex.schema.createTable('progress', table => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id')
    table.date('date').notNullable()
    table.integer('progress').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('progress')
};
