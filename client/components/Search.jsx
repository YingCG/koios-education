import React from 'react'
import Topics from './Topics'

function SearchList ({ filteredTopic }) {
  const filtered = filteredTopic.map(topic => <Topics key={topic.id} person={topic} />)
  return (
    <div>
      {filtered}
    </div>
  )
}

export default SearchList
