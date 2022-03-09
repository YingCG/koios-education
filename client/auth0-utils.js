// import consume from './consume'
import store from './store'
// import { showError } from './actions/error'
import { setUser } from './actions/user'

export async function cacheUser (useAuth0, state) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !state?.token) {
    try {
      const accessToken = await getAccessTokenSilently()

      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken
      }

      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}

export function getLoginFn (useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getRegisterFn (useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/register`
  return () => loginWithRedirect({
    redirectUri,
    screen_hint: 'signin',
    scope: 'role:member'
  })
}

export function getLogoutFn (useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated (useAuth0) {
  return useAuth0().isAuthenticated
}
