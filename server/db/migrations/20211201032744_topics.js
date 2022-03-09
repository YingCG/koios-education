exports.up = (knex) => {
  return knex.schema.createTable('topics', t => {
    t.increments('id').primary()
    t.string('name')
    t.integer('subject_id').references('subjects.id')
    t.string('summary')
    t.string('questions')
    t.string('careers')
    t.string('data')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('topics')
}
