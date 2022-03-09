exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('data_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('data_types').insert([
        {
          id: 1,
          name: 'Temperature',
          summary: 'This data was gathered from a model rocket launched near Hamilton, New Zealand in February 2021.',
          image: 'temperatureovertime.jpg'
        },
        {
          id: 2,
          name: 'Altitude',
          summary: 'This data was gathered from a model rocket launched near Hamilton, New Zealand in February 2021.',
          image: 'altitudeovertime.jpg'
        },
        {
          id: 3,
          name: 'Pressure',
          summary: 'This data was gathered from a model rocket launched near Hamilton, New Zealand in February 2021.',
          image: 'pressureovertime.jpg'
        }
      ])
    })
}
