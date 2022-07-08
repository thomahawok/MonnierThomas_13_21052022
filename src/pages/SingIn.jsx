//@ts-check

import { Link, useNavigate } from 'react-router-dom'
import { Button, Spinner, Alert } from 'react-bootstrap'
import { useContext, useState } from 'react'
//import authAPI from '../services/authAPI'
import { login } from '../services/authAPI'
import { userLogin } from '../services/userLogin'
import AuthContext from '../contexts/authContext'
import { useSelector, useDispatch } from 'react-redux'
import { logingPending, logingSuccess, logingError } from '../redux'

/**
 * Component - SingIn
 * @returns {React.ReactElement} JSX.Element - SingIn component
 */

function SingIn() {
  const { isLoading, siAuth, error } = useSelector((state) => state.login)
  const dispatch = useDispatch()

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
    dispatch(logingPending())
    try {
      const isAuth = await userLogin(credientials)
      console.log(isAuth)

      if (isAuth.status === 400) {
        return dispatch(logingError(isAuth.message))
      }

      dispatch(logingSuccess())
      navigate('/Profile')
    } catch (error) {
      dispatch(logingError(error.response.data.message))
    }

    /*
    login(credientials).then((data) => {
      if (data) {
        setIsAuthenticated(true)
        navigate('/Profile')
      } else {
        setIsAuthenticated(false)
      }
    })
    */
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {error && <Alert variant="danger">{error}</Alert>}
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
            <Button type="submit" variant="success" className="sign-in-button">
              Button Sign In2
            </Button>
            {isLoading && <Spinner animation="border" variant="success" />}
            {/*<!--  -->*/}
          </form>
        </section>
      </main>
    </>
  )
}

export default SingIn
