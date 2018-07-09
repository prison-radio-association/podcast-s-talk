import React from 'react';
import Vimeo from 'react-vimeo';
import artwork from './artwork.jpg';
import logo from './logo.jpg';
import cx from 'classnames';

const Hero = ({ episode, vid }) => (
  <header className={cx('masthead', { 'masthead--hasVideo': vid })}>
    <div className="container-fluid">
      <div className="masthead__content text-center d-flex justify-content-center align-items-center flex-column flex-md-row pb-4">
        <div className="masthead__element masthead__element--logo">
          <div className="wrapper">
            <img className="logo" src={logo} alt="Sex Talk" />
          </div>
        </div>
        {vid && (
          <div className="masthead__element masthead__element--video ml-md-4 flex-grow-1">
            <div className="wrapper">
              <Vimeo videoId={vid} />
            </div>
          </div>
        )}
        <div className="masthead__element masthead__element--artwork">
          <div className="wrapper">
            <img className="artwork" src={artwork} alt="Uncensored Chat Show, Real Stories, Real Issues" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
