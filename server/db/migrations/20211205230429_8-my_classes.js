exports.up = function (knex) {
  return knex.schema.createTable('my_classes', table => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('user_auth0_id').references('users.auth0_id')
    table.integer('topic_id').references('topics.id')
    table.date('created_at')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('my_classes')
}
