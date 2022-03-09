exports.up = (knex) => {
  return knex.schema.createTable('Links', t => {
    t.increments('id').primary()
    t.string('type')
    t.integer('topic_id').references('topics.id')
    t.string('name')
    t.string('description')
    t.string('link')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Links')
}
