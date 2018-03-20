import React from 'react';
import banana from './banana.jpg';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top " id="mainNav">
    <div className="container-fluid p-0">
      <a className="navbar-brand" href="#page-top">
        <img className="navbar-brand__logo" src={banana} alt="Sex Talk" />
        <span className="visually-hidden">Sex Talk</span>
      </a>
      <button
        className="navbar-toggler navbar-toggler-right text-white"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link " href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
