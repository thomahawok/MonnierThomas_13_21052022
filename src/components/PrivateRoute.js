import { useContext } from 'react'
import AuthContext from '../contexts/authContext'
import { useNavigate, Route } from 'react-router-dom'
import { isAuthenticatedFun } from '../services/authAPI'

function PrivateRoute(path, component) {
  const { IsAuthenticated } = useContext(AuthContext)
  const { location } = useNavigate()
  if (isAuthenticatedFun) {
    return <Route path={path} component={component} />
  } else if (!IsAuthenticated && location.pathname == '/signIn') {
    //return <Redirect to="/" />
  } else {
    //return <Redirect to="/" />
  }
}
export default PrivateRoute
