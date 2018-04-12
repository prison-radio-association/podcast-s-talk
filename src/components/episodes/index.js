import React from 'react';
import Link from 'gatsby-link';
import { TeaserEpisode } from '../episode';

const EpisodeWrapper = props => (
  <div className="col-md mb-5">
    <div className="media media--episode media--episode-teaser d-flex">
      <Link className="media__image" style={{ backgroundImage: `url(${encodeURIComponent(props.frontmatter.image)})` }} to={props.frontmatter.path} />
      <div className="media-body">
        <TeaserEpisode {...props} />
      </div>
    </div>
  </div>
);

function renderRows(episodes) {
  const rows = [];
  for (let i = 0; i < episodes.length; i = i + 2) {
    rows.push(
      <div className="row" key={i}>
        {episodes[i] !== undefined && <EpisodeWrapper {...episodes[i].node} />}
        {episodes[i+1] !== undefined && <EpisodeWrapper {...episodes[i+1].node} />}
      </div>
    )
  }

  return rows;
}

const Episodes = ({ episodes }) => (
  <section className="episodes text-white">
    <div className="container-fluid pt-4 pb-2">
      <h1 className="episodes__title mb-4 pb-2 section-title">Episodes</h1>
      {renderRows(episodes)}
    </div>
  </section>
);

export default Episodes;
