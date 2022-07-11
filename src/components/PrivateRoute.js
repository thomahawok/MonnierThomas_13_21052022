import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
/**
 * Component - PrivateRoute
 */
function PrivateRoute() {
  const { isAuth } = useSelector((state) => state.login)
  return isAuth ? <Outlet /> : <Navigate to="/" />
}
export default PrivateRoute
