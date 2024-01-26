import React from 'react';
import AlphaWhite from '../../asset/logo/AlphaLogoWhite.png';
import './index.css';

function Footer() {
  return (
    <div className='footer w-100'>
      <div className='footer-container row p-2 m-0'>
        <div className='col-md-3 col-12 footer-list p-0'>
          <a className="navbar-brand pt-2 m-0 h-auto d-block w-auto p-0 d-flex justify-content-center" href="#">
            <img src={AlphaWhite} alt="alpha Academy Logo" width="140px" />
          </a>
          <h5 className='text-light text-center p-1 m-0'>Alpha Academy Mulchera</h5>
          <div className='d-flex justify-content-center m-0 p-0'>
          <hr className='border border-light w-50 m-1'/>

          </div>
          <p className='text-center text-light m-0 p-1 para-font'>An initiative by District Collector Office Gadchiroli</p>
          <ul>
            {/* Add items if needed */}
          </ul>
        </div>

        <div className='col-md-3 col-12 footer-list'>
          <h4>Contact Us</h4>
          <ul>
            <li><p className='m-0'>Subhas Chandra Bose Chowk, Rabindranath Tagore Vachanalaya, Mulchera - 442703, Gadchiroli, Maharashtra</p></li>
            <li>9075-36-1405</li>
            <li>alphaAcademyMulchera@gmail.com</li>
          </ul>
        </div>

        <div className='col-md-3 col-12 footer-list'>
          <h4>Navigate</h4>
          <ul>
            <li>Empowering Rural Economy</li>
            <li>Support Our Initiative</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className='col-md-3 col-12 footer-list'>
          <h4>Our Courses</h4>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Front-end Development</li>
            <li>Programming in Python</li>
            <li>Back-end Development</li>
          </ul>
        </div>

        <div className='d-flex justify-content-center col-12'>
          <hr className='border w-100' />
        </div>

        <p className='text-light text-center footer-copy col-12'>
          Copyright &copy; 2024 Alpha Academy Mulchera | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
