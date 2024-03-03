import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="title">Happy Endings</div>
        </Link>
        <div className="navbar-links">
          <Link to="/#about">About</Link>
          <Link to="/#mission">Mission</Link>
          <Link to="/#vision">Vision</Link>
          <Link to="/#team">Team</Link>
          <div className="button-container">
            <button type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#log-in">
              Log In
            </button>

            <div className="modal fade" id="log-in" tabIndex="-1" aria-labelledby="log-in-label" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Log In</h1>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="nav-btn">Log In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="nav-btn" data-bs-toggle="modal" data-bs-target="#sign-up">Sign Up</button>
          </div>

          <div className="modal fade" id="sign-up" tabIndex="-1" aria-labelledby="sign-up-label" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newUsername">Username</label>
                        <input type="text" className="form-control" id="newUsername" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newPassword">Password</label>
                        <input type="password" className="form-control" id="newPassword" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="nav-btn">Register</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
