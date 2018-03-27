import React, { Component } from 'react';
import { FullEpisode } from '../components/episode';

const EpisodePage = ({ data: { episode } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
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
