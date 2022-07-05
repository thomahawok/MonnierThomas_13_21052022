import React from 'react'
const auth = {
  isAuthenticated: false,
  setIsAuthenticated: (value) => {},
}

export default React.createContext(auth)
