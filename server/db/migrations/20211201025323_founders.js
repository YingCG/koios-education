exports.up = (knex) => {
  return knex.schema.createTable('founders', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('role')
    t.string('description')
    t.string('image_link')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('founders')
}
