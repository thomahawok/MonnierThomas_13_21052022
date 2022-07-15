import { Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logingSuccess } from '../pages/loginPage/loginSlice'
/**
 * Component - PrivateRoute
 */
function PrivateRoute() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  if (token) {
    dispatch(logingSuccess())
  }

  const { isAuth } = useSelector((state) => state.login)
  return isAuth ? <Outlet /> : <Navigate to="/" />
}
export default PrivateRoute
