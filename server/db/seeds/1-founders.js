exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('founders').del()
    .then(function () {
      // Inserts seed entries
      return knex('founders').insert([
        {
          id: 1,
          name: 'Julianne',
          role: 'Product Owner',
          description: 'I\'m learning web dev becasue I have a passion for learning and have always been interested in the tech industry. This project is rewarding becasue I believe everyone should have a right to learning.',
          image_link: 'julianne.png'
        },
        {
          id: 2,
          name: 'Ying',
          role: 'The Auth0 Expert',
          description: 'Watch the same lecture videos N times to wire thing up, learning by breaking a bit of most thing --> json file, auth0, sass, database function, api, and draggable user desk',
          image_link: 'Ying-card.png'
        },
        {
          id: 3,
          name: 'Seshan',
          role: 'Good Vibes Lead',
          description: 'Also the github organiser!',
          image_link: 'sesh-card.png'
        },
        {
          id: 4,
          name: 'Vimal',
          role: 'Frontend Lead',
          description: 'Taking care of all of the React!',
          image_link: 'vimal.jpg'
        }
      ])
    })
}
