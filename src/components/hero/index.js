import React from 'react';
import { HeroEpisode } from '../episode';

const Hero = ({ episode }) => (
  <header className="masthead d-flex pt-lg-6">
    <div className="container-fluid h-100 my-auto px-sm-4">
      <div className="masthead__content d-flex h-100 pb-4 text-center text-sm-left align-items-center">
        <div className="media media--episode media--episode-hero text-white">
          <HeroEpisode className="media-body" {...episode.node} />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
