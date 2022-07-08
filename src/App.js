//@ts-check
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SingIn'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Error from './pages/Error'
import AuthContext from './contexts/authContext'
import authAPI from './services/authAPI'
import PrivateRoute from './components/PrivateRoute'
import { Provider } from 'react-redux'
import { store } from './redux'

/**
 *
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authAPI.isAuthenticated
  )

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Provider store={store}>
        <Router>
          <Header />
          <section className="elementsToDisplay">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/Profile" element={<PrivateRoute />}>
                <Route path="/Profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
          <Footer />
        </Router>
      </Provider>
    </AuthContext.Provider>
  )
}

export default App
