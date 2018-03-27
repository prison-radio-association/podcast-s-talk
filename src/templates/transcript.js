import React, { Component } from 'react';
import { EpisodeTranscript } from '../components/episode';

const TranscriptPage = ({ data: { episode } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
      <EpisodeTranscript {...episode} />
    </div>
  </section>
);

export const query = graphql`
  query TranscriptQuery($episodePath: String!) {
    episode: markdownRemark(frontmatter: { path: { eq: $episodePath } }) {
      ...EpisodeFragment
    }
  }
`;

export default TranscriptPage;
