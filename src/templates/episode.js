import React, { Component } from 'react';
import { FullEpisode } from '../components/episode';
import ContextualNav from '../components/contextual-nav';

const EpisodePage = ({ history, data: { episode } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
      <ContextualNav history={history} />
      <FullEpisode {...episode} />
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

export default EpisodePage;
