import React from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import Link from 'gatsby-link';
import remark from 'remark';
import reactRenderer from 'remark-react';
import PlayPause from '../media-player/play-pause';

const EpisodeTranscriptTemplate = ({ className, html, excerpt, episode, currentMedia, playTrack }) => (
  <div className={cx('episode episode--full pb-3', className)}>
    <Helmet>
      <meta name="description" content={excerpt} />
    </Helmet>
    <h1 className="section-title mb-2 pb-2">{episode.frontmatter.title}</h1>
    <h2 className="section-subtitle mb-3">Transcript</h2>
    <div className="episode__actions d-flex justify-content-start mb-3">
      {currentMedia === episode.frontmatter.audio ? (
        <PlayPause className="btn btn-primary" />
      ) : (
        <button className="btn btn-primary" onClick={() => playTrack(episode.frontmatter.audio)}>Play</button>
      )}
    </div>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </div>
);

export default EpisodeTranscriptTemplate;
