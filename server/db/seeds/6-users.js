exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Julianne',
          last_name: 'McCoun',
          email: 'fakeemail@email.com',
          class: 'Newmarket College',
          hash: '',
          is_student: false,
          is_teacher: true
        },
        {
          first_name: 'Ying',
          last_name: '',
          email: 'ying@email.com',
          class: 'Newmarket College',
          hash: '',
          is_student: true,
          is_teacher: false
        }
      ])
    })
}
