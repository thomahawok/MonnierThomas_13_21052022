//@ts-check
import { useContext } from 'react'

import AuthContext from '../contexts/authContext'

export function ClearLocalStorage() {
  window.localStorage.clear()
  console.log(useContext(AuthContext))
  const { setIsAuthenticated } = useContext(AuthContext)
  setIsAuthenticated(false)
}
