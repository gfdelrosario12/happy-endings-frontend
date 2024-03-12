import "../App.css";
import { Link  } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Registration from "./forms/Registration";
import LogIn from "./forms/LogIn";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="title">Happy Endings</div>
        </Link>
        <div className="navbar-links">
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#mission">Mission</HashLink>
          <HashLink smooth to="/#vision">Vision</HashLink>
          <HashLink smooth to="/#team">Team</HashLink>
          <div className="button-container">
            <button type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#log-in">
              Log In
            </button>

            <div className="modal fade" id="log-in" tabIndex="-1" aria-labelledby="log-in-label" aria-hidden="true">
<LogIn />
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#sign-up">Sign Up</button>
          </div>

          <div className="modal fade" id="sign-up" tabIndex="-1" aria-labelledby="sign-up-label" aria-hidden="true">
              <Registration />
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
