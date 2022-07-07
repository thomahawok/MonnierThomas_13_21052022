//@ts-check
import { useContext } from 'react'
import AuthContext from '../contexts/authContext'
/**
 * Component - ClearLocalStorage
 */

export function ClearLocalStorage() {
  window.localStorage.clear()

  // ou localStorage.removeItem('token')
  console.log(useContext(AuthContext))
  const { setIsAuthenticated } = useContext(AuthContext)
  setIsAuthenticated(false)
}
