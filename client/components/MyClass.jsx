import React, { useEffect, useState } from 'react'
import { getMyClass } from '../api/myclass'
import Notes from './Notes'
import { useSelector } from 'react-redux'
import Stationery from './Stationery'

function MyClass () {
  const [myClass, setMyClass] = useState([])
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.auth0Id) {
      getMyClass(user.auth0Id)
        .then((myClasses) => {
          setMyClass(myClasses)
          return null
        })
        .catch(err => console.error(err))
    }
  }, [])

  return (
    <div className='main classroom'>
      <div className='classroom-container'>

        { myClass?.map((myTopic) =>
          <ul key={myTopic.id}>
            <Notes data={myTopic} />
          </ul>
        )}
      </div>

      <Stationery />
      <img className='classroom-picture' src='/images/ClassroomPic.svg' style={{ zIndex: 1 }} />
    </div>
  )
}

export default MyClass
