const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../subjects')

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getTopicsBySubjectId', () => {
  it('gets all of the topics with a matching subject id', () => {
    return db.getTopicsBySubjectId(1, testDb)
      .then(topics => {
        expect(topics).toHaveLength(4)
        expect(topics).not.toBeNull()
        return null
      })
  })
})

// describe('getTopicById', () => {
//   it('gets the specific topic by the topic id', () => {
//     return db.getTopicById(1, testDb)
//       .then(topic => {
//         expect(topic.name).toBe('The Evolution of Astronomy')
//         expect(topic.learning_links).toHaveLength(8)
//         return null
//       })
//   })
// })
