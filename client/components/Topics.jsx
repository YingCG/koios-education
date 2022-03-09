import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getTopics } from '../api/topics'

function Topics () {
  const { subject } = useParams()
  const [topics, setTopics] = useState([])
  useEffect(() => {
    getTopics(subject)
      .then(topics => {
        const newTopics = topics.body.topics
        setTopics(newTopics)
        return null
      })
      .catch(err => {
        console.error('Error: ', err)
      })
  }, [])

  return (
    <>
      <div className="topic__page-container">
        <h1 className="topic__heading">Topics</h1>
        <div className="topic__container">
          {topics.map(topic => {
            return (
              <a className="topic__item-link" href={`/subjects/${subject}/${topic.id}`} key={topic.name} id={topic.id} >
                <h2 key={topic.id}>{topic.name}</h2>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Topics
