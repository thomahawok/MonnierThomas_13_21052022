//@ts-check

import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useContext, useState } from 'react'
import authAPI from '../services/authAPI'
import AuthContext from '../contexts/authContext'

/**
 * Component - SingIn
 * @returns {React.ReactElement} JSX.Element - SingIn component
 */

function SingIn() {
  let navigate = useNavigate()

  const [credientials, setCredientials] = useState({
    email: '',
    password: '',
  })
  const { setIsAuthenticated } = useContext(AuthContext)

  function handelChange({ currentTarget }) {
    const { value, name } = currentTarget
    setCredientials({
      ...credientials,
      [name]: value,
    })
  }

  async function handelSubmit(e) {
    e.preventDefault()
    try {
      await authAPI.authenticated(credientials)
      setIsAuthenticated(true)
      //<Navigate to="/login" />
      navigate('../Profile', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handelSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="email"
                onChange={handelChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handelChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/*<!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
            <Link to="/Profile" className="sign-in-button">
              Sign In
            </Link>
            {/*<!-- SHOULD BE THE BUTTON BELOW -->*/}
            <Button className="sign-in-button" type="submit">
              Sign In2
            </Button>
            {/*<!--  -->*/}
          </form>
        </section>
      </main>
    </>
  )
}

export default SingIn
