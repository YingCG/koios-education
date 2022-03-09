import React, { useEffect, useState } from 'react'
import { getData } from '../api/data'

function DataPage (props) {
  const [data, setData] = useState([])
  const [headings, setHeadings] = useState('')
  const { dataName } = props.match.params
  const first = dataName.charAt(0).toUpperCase()
  const newName = first + dataName.slice(1)
  useEffect(() => {
    // Searching DB to find correct data to assign to data
    getData(newName)
      .then(data => {
        setData(data.body)
        setHeadings(data.body[0])
        return null
      })
      .catch(err => {
        console.error('Error: ', err)
      })
  }, [])
  const imagePath = headings.image
  return (
    <>
    <div className="satellite-data__page-container"></div>
      <h1 className="satellite-data__page-heading">{newName}</h1>
      <div  className="satellite-data__page-data">
        {headings.summary}
        {<br></br>}
        {headings.description}
        {<br></br>}
        <img src={`/images/${imagePath}`} />
        {<br></br>}
        <div className="satellite-data__data-container">
        {data.map((e, i) => {
          const blockId = Number(i)
          console.log('Ids: ', blockId)
          return (
         
                
                <div key={blockId } id={blockId} className="satellite-data__data-block" >
                <span className="satellite-data__item-label">Time:</span><span> {e.timestamp}</span><br/>

                <span className="satellite-data__item-label">Value:</span><span> {e.value}</span><br/>
                <span className="satellite-data__item-label">Description:</span><span> {e.description}</span><br/>
                </div>
             
            
           
          )
        })}
         </div>
      </div>
      {/* <h3>{data[0].summary}</h3> */}
      {/* <h3>{values}</h3> */}
    </>
  )
}

export default DataPage
