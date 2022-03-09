exports.up = (knex) => {
  return knex.schema.createTable('data_types', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('summary')
    t.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('data_types')
}
