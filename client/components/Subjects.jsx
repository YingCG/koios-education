import React, { useEffect, useState } from 'react'
import { getSubjects } from '../api/subjects'
import SubjectItem from './SubjectItem'

function Subjects () {
  const [subjects, setSubjects] = useState([])
  useEffect(() => {
    getSubjects()
      .then(subjects => {
        const newSubject = subjects.body.subjects
        setSubjects(newSubject)
        return null
      })
      .catch(err => {
        console.error('Error: ', err)
      })
  }, [])

  return (
    <>
      <div className="subject__container">

        <h1 className="subject__heading">Subjects</h1>
        <div className="subject__item-container">
          {subjects.map(e => {
            return (<a className="subject__item-link" href={`/subjects/${e.search_name}`} key={e.name}><SubjectItem key={e.id} name={e} /></a>)
          })}
        </div>
      </div>
    </>
  )
}

export default Subjects
