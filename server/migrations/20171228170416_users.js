
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('pswd').notNullable()
    table.string('goal_text').notNullable()
    table.integer('goal_num').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
