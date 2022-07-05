//@ts-check
import { Link } from 'react-router-dom'
import argentBankLogo from '../assets/img/argentBankLogo.png'

/**
 * Component - Header
 * @returns {React.ReactElement} JSX.Element - header component
 */

function Header() {
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
          <Link className="main-nav-item" to="/signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
