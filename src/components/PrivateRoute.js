import { useContext } from 'react'
import AuthContext from '../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import { logingPending, logingSuccess, logingError } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
/**
 * Component - PrivateRoute
 */
function PrivateRoute() {
  const { isLoading, isAuth, error } = useSelector((state) => state.login)
  return isAuth ? <Outlet /> : <Navigate to="/" />
}
export default PrivateRoute
