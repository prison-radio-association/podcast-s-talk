/* global graphql */

import React from 'react';
import Episode from '../episode';
import logo from './logo.jpg';

// const renderLatestEpisode = episodes => episodes.edges

const Hero = ({ episode }) => (
  <header className="masthead d-flex pt-lg-6">
    <div className="container-fluid h-100 my-auto px-sm-4">
      <div className="masthead__content d-flex h-100 pb-4 flex-column-reverse flex-sm-row text-center text-sm-left align-items-center">
        <div className="media text-white">
          <Episode className="media-body" {...episode.node} />
        </div>
        {/* <div className="masthead__logo mb-auto mb-sm-0 mt-sm-auto">
          <img src={logo} alt="Sex Talk" />
        </div> */}
      </div>
    </div>
  </header>
);

export default Hero;
