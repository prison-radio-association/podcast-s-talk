import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import ShareList from '../share/share-list';
import SubscribeButton from './subscribe-button';
import PlayPause from './play-pause';

const FullEpisodeTemplate = ({ className, frontmatter, html, transcriptUrl }) => (
  <div className={cx('episode episode--full pb-3', className)}>
    <h1 className="section-title mb-3 pb-2">{frontmatter.title}</h1>
    <div className="episode__actions d-flex justify-content-start mb-3 align-items-center">
      { transcriptUrl && <Link className="btn btn-secondary mr-2 mr-sm-3" to={transcriptUrl}>Transcript</Link> }
      <PlayPause src={frontmatter.audio} />
      <SubscribeButton />
    </div>
    <div dangerouslySetInnerHTML={{__html: html}} />
    <ShareList url={frontmatter.path} className="align-content-start" size={48} />
  </div>
);

export default FullEpisodeTemplate;
