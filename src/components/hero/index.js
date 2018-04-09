import React from 'react';
import { HeroEpisode } from '../episode';

const Hero = ({ episode }) => (
  <header className="masthead d-flex py-3 py-md-5">
    <div className="container-fluid h-100 my-auto">
      <div className="masthead__content d-flex align-items-center text-center text-sm-left">
        <div className="media media--episode media--episode-hero text-white">
          <HeroEpisode className="media-body" {...episode.node} />
        </div>
        <div className="logo" />
      </div>
    </div>
  </header>
);

export default Hero;
