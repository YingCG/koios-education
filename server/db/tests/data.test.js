const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../data')

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

describe('getDataTypes', () => {
  it('gets all of the dataTypes in the table', () => {
    return db.getDataTypes(testDb)
      .then(types => {
        expect(types).toHaveLength(3)
        expect(types[0].name).toMatch('Temperature')
        expect(types[1].name).toMatch('Altitude')
        expect(types[2].name).toMatch('Pressure')
        return null
      })
  })
})

describe('getDataTypeIdByName', () => {
  it('Returns correct id for temperature', () => {
    return db.getDataTypeIdByName('Temperature', testDb)
      .then(id => {
        expect(id.id).toBe(1)
        return null
      })
  })
  it('Returns correct id for altitude', () => {
    return db.getDataTypeIdByName('Altitude', testDb)
      .then(id => {
        expect(id.id).toBe(2)
        return null
      })
  })
  it('Returns correct id for pressure', () => {
    return db.getDataTypeIdByName('Pressure', testDb)
      .then(id => {
        expect(id.id).toBe(3)
        return null
      })
  })
})

describe('getDataById', () => {
  it('gets correct data for a given data id type', () => {
    return db.getDataById(1, testDb)
      .then(data => {
        expect(data).toHaveLength(13)
        expect(data[0].dataId).toBe(1)
        expect(data[0].timestamp).toMatch('14:15:4')
        expect(data[0].description).toMatch('Value in degrees celsius, time in NZST.')
        expect(data[0].value).toBe(30.40)
        expect(data[1].value).toBe(30.40)
        expect(data[2].value).toBe(30.40)
        expect(data[3].value).toBe(30.40)
        expect(data[4].value).toBe(30.39)
        expect(data[5].value).toBe(30.39)
        expect(data[12].value).toBe(30.39)
        return null
      })
  })

  it('makes accurate join with dataTypes table', () => {
    return db.getDataById(1, testDb)
      .then(data => {
        expect(data[0].summary).toMatch('This data was gathered from a model rocket launched near Hamilton, New Zealand in February 2021.')
        expect(data[0].name).toMatch('Temperature')
        expect(data[0].typeId).toBe(1)
        expect(data[0].image).toMatch('temperatureovertime.jpg')
        return null
      })
  })
})
