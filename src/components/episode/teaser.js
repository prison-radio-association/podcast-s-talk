import React from 'react';
import cx from 'classnames';
import Link from 'gatsby-link';
import SubscribeButton from './subscribe-button';
import ShareButton from './share-button';
import PlayPause from './play-pause';

const TeaserEpisodeTemplate = ({
  className,
  html,
  transcriptUrl,
  frontmatter,
}) => (
  <div className={cx('episode', className)}>
    <h1 className="episode__title mt-0 mb-sm-2 border-bottom pb-2">
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
    </h1>
    <div className="episode__description mb-sm-3"><div dangerouslySetInnerHTML={{ __html: html }} /></div>
    <div className="episode__actions d-flex justify-content-start align-items-center">
      <Link className="btn btn-outline-secondary mr-2 mr-sm-3" to={transcriptUrl}>Transcript</Link>
      <PlayPause src={frontmatter.audio} />
      <SubscribeButton />
      <ShareButton shareUrl={frontmatter.path} />
    </div>
  </div>
);

export default TeaserEpisodeTemplate;
