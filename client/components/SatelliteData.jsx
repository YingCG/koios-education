import React, { useEffect, useState } from 'react'
import { getDataTypes } from '../api/data'

function SatelliteData () {
  const [types, setTypes] = useState([])
  useEffect(() => {
    getDataTypes()
      .then(types => {
        setTypes(types.body.dataTypes)
        return null
      })
      .catch(err => {
        console.error('Error: ', err)
      })
  }, [])

  return (
    <>
     <div className="satellite-data__container">
      <h1 className="satellite-data__heading">Data</h1>
      <div className="satellite-data__item-container">
      {types.map(e => {
        const searchName = e.name.toLowerCase()
        return (
          <a className="satellite-data__item-link" key={e.name} href={`/data/${searchName}`}><div key={e.name}>
            <h2>{e.name}</h2>
          </div>
          </a>
        )
      }
      )}
      </div>
      </div>
    </>
  )
}

export default SatelliteData
