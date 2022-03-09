const connection = require('./connection')

module.exports = {
  getDataTypes,
  getDataTypeIdByName,
  getDataById
}

// Get everything from dataTypes table (id/name/summary/image)
function getDataTypes (db = connection) {
  return db('data_types')
    .select()
}

// Get a dataType's id by the name of it
function getDataTypeIdByName (name, db = connection) {
  return db('data_types')
    .where('name', name)
    .select('id')
    .first()
}

// Get data information for data pages by the dataType id
function getDataById (id, db = connection) {
  return db('data')
    .where('data_type', id)
    .join('data_types', 'data.data_type', 'data_types.id')
    .select(
      'data_types.id as typeId',
      'data_types.name as name',
      'data_types.summary as summary',
      'data.id as dataId',
      'data.timestamp as timestamp',
      'data.description as description',
      'data.value as value',
      'image'
    )
}
