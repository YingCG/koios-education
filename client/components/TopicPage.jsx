import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getTopicInfo, getLinks } from '../api/topics'
import { addToMyClass } from '../api/myclass'
import { useSelector } from 'react-redux'

function TopicPage (props) {
  const id = props.match.params.topicId
  const user = useSelector(state => state.user)
  const { subject } = useParams()
  const [topic, setTopic] = useState([])
  const [links, setLinks] = useState([])
  useEffect(() => {
    getTopicInfo(id, subject)
      .then(info => {
        const newInfo = info.body.topic[0]
        setTopic(newInfo)
        return null
      })
      .catch(err => {
        console.error('Error: ', err)
      })
    getLinks(id)
      .then(res => {
        const linksList = res.body.links
        setLinks(linksList)
        return null
      })
      .catch(err => console.error('Error: ', err))
  }, [])

  function handleClick () {
    const myClass = {
      userId: user.auth0Id,
      topicId: topic.id
    }
    addToMyClass(myClass)
      .then(() => {
        return null
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <div className="topic__page-container">
        <h2 className="topic__page-heading">{topic.name}</h2>
        <Link to='/myclass'><button className="topic__page-button"onClick={handleClick}>Add Topic to My Class</button></Link>
        {topic.summary && topic.summary?.split('\n')
          .map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        <h3 className="topic__page-section">Here are some helpful study materials: </h3>
        {links?.map(link => {
          return (
            <div key={link.id}>
              <a className="topic__page-link" href={link.link}>
                <h4>{link.name}</h4>
              </a>
              <p>{link.description}</p>
            </div>
          )
        })}

        <h3 className="topic__page-section"> Test your learning! Have a look at these questions: </h3>
        {topic.questions?.split('\n')
          .map((question, i) => <p key={i}>{question}</p>)}

        <h3 className="topic__page-section">Liked this topic? Check out related career pathways!</h3>
        {topic.careers?.split('\n')
          .map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </div>
    </>
  )
}

export default TopicPage
