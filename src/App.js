//@ts-check
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SingIn'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Error from './pages/Error'
//import authContext from './contexts/authContext'
import AuthContext from './contexts/authContext'
import { isAuthenticatedFun } from './services/authAPI'
//import PrivateRoute from './components/PrivateRoute'

/**
 *
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedFun)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Header />
        <section className="elementsToDisplay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />
            {/*<PrivateRoute path="/Profile" element={<Profile />} />*/}
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
