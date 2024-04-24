import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
          
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse justify-content-end navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
  
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;