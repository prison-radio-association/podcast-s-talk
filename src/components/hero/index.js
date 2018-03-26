import React from 'react';
import Episode from '../episode';

const Hero = ({ episode }) => (
  <header className="masthead d-flex pt-lg-6">
    <div className="container-fluid h-100 my-auto px-sm-4">
      <div className="masthead__content d-flex h-100 pb-4 flex-column-reverse flex-sm-row text-center text-sm-left align-items-center">
        <div className="media text-white">
          <Episode className="media-body" {...episode.node} />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
