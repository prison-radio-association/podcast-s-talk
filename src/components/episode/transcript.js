import React from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import SubscribeButton from './subscribe-button';
import ShareButton from './share-button';
import PlayPause from './play-pause';

const EpisodeTranscriptTemplate = ({ className, html, excerpt, episode }) => (
  <div className={cx('episode episode--full pb-3', className)}>
    <Helmet>
      <meta name="description" content={excerpt} />
    </Helmet>
    <h1 className="section-title mb-2 pb-2">{episode.frontmatter.title}</h1>
    <h2 className="section-subtitle mb-3">Transcript</h2>
    <div className="episode__actions d-flex justify-content-start mb-3 align-items-center">
      <PlayPause src={episode.frontmatter.audio} className="btn-primary" />
      <SubscribeButton />
      <ShareButton shareUrl={episode.frontmatter.path} />
    </div>
    <div dangerouslySetInnerHTML={{__html: html}} />
  </div>
);

export default EpisodeTranscriptTemplate;
