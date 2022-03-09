import React, { useEffect, useState } from 'react'
import { getFounders } from '../api/about.js'
import FounderCard from './FounderCard'
import Footer from './Footer.jsx'
import OurStory from './OurStory.jsx'

function AboutUs () {
  const [founders, setFounders] = useState([])
  const [ourStoryIsActive, setOurStoryIsActive] = useState(false)

  useEffect(() => {
    getFounders()
      .then(res => {
        const obj = res
        setFounders(obj.founders)
        return null
      })
      .catch(err => console.error('Error: ', err))
  }, [])

  const foundersArray = founders.map(item => {
    return (
      <FounderCard key={item.id} info={item}/>
    )
  })

  function ourStory () {
    setOurStoryIsActive(true)
  }

  function ourTeam () {
    setOurStoryIsActive(false)
  }

  return (
    <div className='aboutus__container'>
      <div className='aboutus-buttons'>
        <button className='aboutus' onClick={ourTeam}>Our Team</button>
        <button className='aboutus' onClick={ourStory}>Our Story</button>
      </div>
      {ourStoryIsActive ? <OurStory />
        : (<div className='aboutus__blurb'>
          {foundersArray}
        </div>)
      }
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default AboutUs
