import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import PlayPause from '../media-player/play-pause';

const HeroEpisodeTemplate = ({ className, frontmatter, media, currentMedia, playTrack }) => (
  <div className={cx('episode', className)}>
    <h1 className="episode__title mt-0 mb-sm-4">{frontmatter.title}</h1>
    <p className="episode__description mb-sm-4">{frontmatter.description}</p>
    <div className="episode__actions d-flex justify-content-center justify-content-sm-start">
      <Link className="btn btn-outline-secondary mr-2 mr-sm-3" to={`${frontmatter.path}/transcript`}>Transcript</Link>
      {currentMedia === frontmatter.audio ? (
        <PlayPause className="btn btn-outline-primary" />
      ) : (
        <button className="btn btn-outline-primary" onClick={() => playTrack(frontmatter.audio)}>Play</button>
      )}
    </div>
  </div>
);

export default HeroEpisodeTemplate;
