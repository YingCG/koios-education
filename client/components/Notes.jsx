import React, { useEffect, useState } from 'react'
// import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'
import { useDrag } from '@use-gesture/react'
import { getSubjectName, removeFromMyClass } from '../api/myclass'
import { useSelector } from 'react-redux'

function Notes ({ data }) {
  const [notePosition, setNotePostion] = useState({ x: 10, y: 10 })
  const [name, setName] = useState('')
  const user = useSelector(state => state.user)
  const bindPosition = useDrag((params) => {
    setNotePostion({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  useEffect(() => {
    const setTimer = setTimeout(() => {
      getSubjectName(data.topicId)
        .then(name => {
          setName(name.body.subjectName)
          return null
        })
        .catch(err => console.error('Error: ', err))
    }, 500)
    return () => clearTimeout(setTimer)
  }, [])

  function handleRemove () {
    const userAuth = user.auth0Id
    const topicId = data.topicId
    removeFromMyClass(userAuth, topicId)
      .then(() => {
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <div className='note'>
        <div {...bindPosition()}
          style ={{
            position: 'relative',
            top: notePosition.y,
            left: notePosition.x,
            zIndex: 2
          }}>
          <div className='draggable' alt='note'>
            {/*  insert subject and topic id   */}
            <Link to={`/subjects/${name}/${data.topicId}`}> <p>{data.name}</p> </Link>
            <Link to='/myclass'><button className='noteBtn' onClick={handleRemove}>Remove Topic</button></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Notes
