import React from 'react';
import artwork from './artwork.jpg';
import logo from './logo.jpg';

const Hero = ({ episode }) => (
  <header className="masthead">
    <div className="container-fluid">
      <div className="masthead__content text-center">
        <img className="logo" src={logo} alt="Sex Talk" />
        <img className="artwork" src={artwork} alt="Uncensored Chat Show, Real Stories, Real Issues" />
      </div>
    </div>
  </header>
);

export default Hero;
