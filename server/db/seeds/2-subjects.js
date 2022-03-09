exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        { id: 1, name: 'Astronomy', search_name: 'astronomy', summary: 'The study of celestial objects and phenomena.', image_link: 'astronomy.jpg' },
        { id: 2, name: 'Earth Science', search_name: 'earthscience', summary: 'The study of all fields relating to our planet Earth and its atmosphere.', image_link: 'earth_science.jpg' },
        { id: 3, name: 'Physics', search_name: 'physics', summary: 'The study of matter: what it is, how it behaves through space and time and the energy which it can possess.', image_link: 'physics.jpg' },
        { id: 4, name: 'Mātauranga Māori & Space', search_name: 'maoriknowledge', summary: 'Māori knowledges are embedded in our New Zealand culture - early settlers used the sun and moon to measure time.', image_link: 'maori.jpg' }
        // { id: 4, name: 'Math', search_name: 'math', summary: '', image_link:'maths.jpg'},
        // { id: 5, name: 'Biology', search_name: 'biology', summary: '', image_link:'biology.jpg'},
        // { id: 6, name: 'Computer Science', search_name: 'computerscience', summary: '', image_link:'comp_science.jpg'},
        // { id: 7, name: 'Human Skills', search_name: 'humanskills', summary: '', image_link:'human_skills.jpg'}
        // { id: 8, name: 'Engineering', search_name: 'engineering', summary: '', image_link:'engineering.jpg'},
        // { id: 9, name: 'Business & Economics', search_name: 'businessecon', summary: '', image_link:'business_economics.jpg'},
        // { id: 10, name: 'Lab Skills', search_name: 'labskills', summary: '', image_link:'lab.jpg' },
        // { id: 11, name: 'University Ready', search_name: 'universityready', summary: '', image_link: 'uni.jpg'},
      ])
    })
}
