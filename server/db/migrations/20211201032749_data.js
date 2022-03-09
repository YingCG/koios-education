exports.up = (knex) => {
  return knex.schema.createTable('data', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('data_type').references('data_types.id')
    t.string('timestamp')
    t.string('description')
    t.integer('value')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('data')
}
