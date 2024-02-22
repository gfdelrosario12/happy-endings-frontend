import '../App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">
        <a className="navbar-brand" href="#">
          <div className="title">Happy Endings</div>
        </a>
        <div className="navbar-links">
          <a href="#" className="p-6">About</a>
          <a href="#">Mission</a>
          <a href="#">Vision</a>
          <a href="#">Team</a>
          <div className='button-container'><button type="button" className="nav-btn">Log In</button></div>
          <div className='button-container'><button type="button" className="nav-btn">Sign Up</button></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
