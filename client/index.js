import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={'koios.au.auth0.com'}
      clientId={'lb2Dnf67XyhsvMcUjUiWCpWmZRaxfkab'}
      redirectUri={window.location.origin}
      audience='https://koios/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
