import React, { Component } from 'react';
import { FullEpisode } from '../components/episode';
import ContextualNav from '../components/contextual-nav';

const EpisodeTemplate = ({ pathContext, data: { episode } }) => (
  <section className="page episode-page bg-dark text-white">
    <div className="container-fluid">
      <ContextualNav />
      <div className="row">
        <div className="col-sm mb-4">
          <img src={episode.frontmatter.image} />
        </div>
        <div className="col-sm">
          <FullEpisode {...episode} transcriptUrl={pathContext.transcriptUrl} />
        </div>
      </div>
    </div>
  </section>
);

export const query = graphql`
  query EpisodeQuery($path: String!) {
    episode: markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...EpisodeFragment
    }
  }
`;

export default EpisodeTemplate;