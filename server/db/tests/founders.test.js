const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../founders')

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

describe('getFounders', () => {
  it('returns the correct number of users', () => {
    return db.getFounders(testDb)
      .then(founders => {
        expect(founders).toHaveLength(4)
        return null
      })
  })
  it('returns the correct description for each founder', () => {
    return db.getFounders(testDb)
      .then(founders => {
        expect(founders[0].name).toMatch('Julianne')
        expect(founders[0].role).toMatch('Product Owner')
        expect(founders[1].name).toMatch('Ying')
        expect(founders[2].name).toMatch('Seshan')
        expect(founders[3].name).toMatch('Vimal')
        return null
      })
  })
})
