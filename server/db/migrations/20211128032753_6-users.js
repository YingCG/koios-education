exports.up = (knex) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('auth0_id')
    t.string('first_name')
    t.string('last_name')
    t.string('email')
    t.string('class')
    t.string('hash')
    t.boolean('is_student')
    t.boolean('is_teacher')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
