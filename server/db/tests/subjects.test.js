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

describe('getSubjects', () => {
  it('returns the correct number of subjects', () => {
    return db.getSubjects(testDb)
      .then(subjects => {
        expect(subjects).toHaveLength(4)
        return null
      })
  })
  it('returns the correct subjects', () => {
    return db.getSubjects(testDb)
      .then(subjects => {
        expect(subjects[0].name).toMatch('Astronomy')
        expect(subjects[1].name).toMatch('Earth Science')
        return null
      })
  })
})

describe('getSubjectId', () => {
  it('returns the correct id for the subject name', () => {
    return db.getSubjectId('Astronomy', testDb)
      .then(idKeyVal => {
        const id = idKeyVal.id
        expect(id).toBe(1)
        return null
      })
  })
})

describe('getSubjectById', () => {
  it('returns the correct subject for a given subject it', () => {
    return db.getSubjectById(2, testDb)
      .then(subject => {
        expect(subject.id).toBe(2)
        expect(subject.name).toMatch('Earth Science')
        expect(subject.search_name).toMatch('earthscience')
        expect(subject.summary).toMatch('The study of all fields relating to our planet Earth and its atmosphere.')
        expect(subject.image_link).toMatch('earth_science.jpg')
        return null
      })
  })
})

describe('getTopicsBySubjectId', () => {
  it('returns the correct number of correct topics for a given subject id', () => {
    return db.getTopicsBySubjectId(1, testDb)
      .then(topics => {
        expect(topics).toHaveLength(4)
        expect(topics[0].name).toMatch('The Evolution of Astronomy')
        expect(topics[1].name).toMatch('Astronomical Cycles')
        expect(topics[2].name).toMatch('Solar System Formation Theory')
        return null
      })
  })
})

// getTopicById

// getLinksByTopicId
