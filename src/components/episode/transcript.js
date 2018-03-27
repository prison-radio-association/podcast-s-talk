import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import remark from 'remark';
import reactRenderer from 'remark-react';
import PlayPause from '../media-player/play-pause';

const EpisodeTranscriptTemplate = ({ className, html, frontmatter, media, currentMedia, playTrack }) => (
  <div className={cx('episode episode--full pb-3', className)}>
    <h1 className="section-title mb-2 pb-2">{frontmatter.title}</h1>
    <h2 className="section-subtitle mb-3">Transcript</h2>
    <div className="episode__actions d-flex justify-content-start mb-3">
      {currentMedia === frontmatter.audio ? (
        <PlayPause className="btn btn-primary" />
      ) : (
        <button className="btn btn-primary" onClick={() => playTrack(frontmatter.audio)}>Play</button>
      )}
    </div>
    {remark().use(reactRenderer).processSync(frontmatter.transcript).contents}
  </div>
);

export default EpisodeTranscriptTemplate;
