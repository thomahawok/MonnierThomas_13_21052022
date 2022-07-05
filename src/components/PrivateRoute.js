import { useContext } from 'react'
import AuthContext from '../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom'
//import authAPI from '../services/authAPI'
/**
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */
function PrivateRoute() {
  const { isAuthenticated } = useContext(AuthContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
export default PrivateRoute
