import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfNotAuthenticated } from './Authenticated'

function Home () {
  const { loginWithRedirect } = useAuth0()
  function handleRegister (event) {
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`
    })
  }

  return (
    <div className='home-container'>
      <div className='page-contents '>
        <h1>Welcome to Koios!</h1>
        <p>
          Instead of promising students that today’s lessons will be important in their lives someday,
          our real world examples provide concrete applications to knowledge and skills learned in the classroom.
        </p>
        <p>
          Real world data examples also encourage students to be aware of the choices they make and how they fit into a greater societal context.
        </p>
        <IfNotAuthenticated>
          <Link to='/' onClick={handleRegister}><button className='button-primary' href=''> Join us </button></Link>
        </IfNotAuthenticated>
        <h5 className='footer'>Who are we? A group of students who want to provide a New Zealand based education resource to students to increase enthusiasm in STEM subjects.</h5>
      </div>

      <div className='home-image'>
        <img src='/images/homebackground.jpg' />
      </div>

    </div>
  )
}

export default Home
