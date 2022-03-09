exports.up = (knex) => {
  return knex.schema.createTable('subjects', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('search_name')
    t.string('summary')
    t.string('image_link')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('subjects')
}
