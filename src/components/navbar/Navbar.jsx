import React from 'react';
import './index.css'
import AlphaLogo from '../../asset/logo/alphaAcadmey.png'
function Navbar() {
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 px-2 shadow-sm">
        <div className="container-fluid m-0 p-0 ">
          <a className="navbar-brand px-2 m-0" href="https://www.google.com">
            <img src={AlphaLogo} alt="alpha Academy Logo" width="85px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse p-1 m-0 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto p-0  w-100 d-flex justify-content-end nav-ul">
              <li className="nav-item">
                <a className="nav-link nav-text" aria-current="page" href="https://www.google.com">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-text "
                  href="https://www.google.com"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu rounded-0 mt-4 shadow-sm border-0 ">
                  <li>
                    <a className="dropdown-item nav-text" href="https://www.google.com">
                    HTML, CSS, and JavaScript
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item nav-text" href="https://www.google.com">
                    Full-Stack Development
                    </a>
                  </li> 
                  <li>
                    <a className="dropdown-item nav-text" href="https://www.google.com">
                    Front-End Development
                    </a>
                  </li>
                  <li>
                  </li>
  
                  <li>
                    <a className="dropdown-item nav-text" href="https://www.google.com">
                    Node.js and Express
                    </a>
                  </li> 
                  
                   <li>
                    <a className="dropdown-item nav-text" href="https://www.google.com">
                    React Js
                    </a>
                  </li>
                </ul>
              </li>
             
              <li className="nav-item">
                <a className="nav-link nav-text" aria-disabled="true">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" aria-disabled="true">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="https://www.google.com">
                  Know Your Block
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  

    </div>
  );
}

export default Navbar;
