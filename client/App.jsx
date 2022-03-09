import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { cacheUser } from './auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Register from './components/Register'
import SatelliteData from './components/SatelliteData'
import Subjects from './components/Subjects'
import Topics from './components/Topics'
import TopicPage from './components/TopicPage'
import Header from './components/Header'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import MyClass from './components/MyClass'
import DataPage from './components/DataPage'

function App () {
  const location = useLocation()
  cacheUser(useAuth0)
  return (
    <>
      <Header />
      <div className='main'>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/subjects' component={Subjects} />
          <Route exact path='/data' component={SatelliteData} />
          <Route exact path='/data/:dataName' component={DataPage}/>
          <Route exact path='/subjects/:subject' component={Topics} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile' component={EditProfile} />
          <Route exact path='/myclass' component={MyClass} />
          <Route exact path='/subjects/:subject/:topicId' component={TopicPage} />
        </Switch>
      </div>
    </>
  )
}

export default App
