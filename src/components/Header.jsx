//@ts-check
import React from 'react'
import { Link } from 'react-router-dom'
import argentBankLogo from '../assets/img/argentBankLogo.png'
import { ClearLocalStorage } from '../components/ClearLocalStorage'
import { useSelector } from 'react-redux'
/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function Header() {
  const { isAuth } = useSelector((state) => state.login)
  const { isLoading, firstName, lastName, error } = useSelector(
    (state) => state.profile
  )
  //console.log(isAuthenticated)
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuth ? (
            <Link className="main-nav-link" to="/profilePage/Profile">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
          ) : (
            <Link className="main-nav-link" to="/loginPage/signIn">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
          {isAuth && (
            <Link
              className="main-nav-item"
              onClick={() => ClearLocalStorage()}
              to="/"
            >
              <i className="fa-solid fa-arrow-right-from-bracket" />
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
