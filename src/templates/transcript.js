import React, { Component } from 'react';
import { EpisodeTranscript } from '../components/episode';
import ContextualNav from '../components/contextual-nav';

const TranscriptPage = ({ pathContext, data: { transcript } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
      <ContextualNav>Back</ContextualNav>
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

export default TranscriptPage;
