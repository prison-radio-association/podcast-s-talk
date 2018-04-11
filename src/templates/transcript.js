import React, { Component } from 'react';
import { EpisodeTranscript } from '../components/episode';
import ContextualNav from '../components/contextual-nav';

const TranscriptTemplate = ({ pathContext, data: { transcript } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
      <ContextualNav />
      <EpisodeTranscript {...transcript} {...pathContext} />
    </div>
  </section>
);

export const query = graphql`
  query TranscriptQuery($templateKey: String!, $episodeTitle: String!) {
    transcript: markdownRemark(frontmatter: { 
      title: { eq: $episodeTitle }
      templateKey: { eq: $templateKey }
    }) {
      html
      excerpt(pruneLength: 250)
    }
  }
`;

export default TranscriptTemplate;
