import React from 'react';
import cx from 'classnames';

const Episode = ({ className, frontmatter }) => (
  <div className={cx('episode', className)}>
    <h1 className="episode__title mt-0 mb-sm-4">{frontmatter.title}</h1>
    <p className="episode__description mb-sm-4">{frontmatter.description}</p>
    <div className="episode__actions d-flex justify-content-center justify-content-sm-start">
      <button className="btn btn-outline-secondary mr-2 mr-sm-3">Transcript</button>
      <button className="btn btn-outline-primary">Play</button>
    </div>
  </div>
);

export const query = graphql`
  fragment EpisodeFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      audio
    }
  }
`;

export default Episode;
