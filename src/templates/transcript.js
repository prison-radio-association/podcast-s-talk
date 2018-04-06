import React, { Component } from 'react';
import { EpisodeTranscript } from '../components/episode';
import ContextualNav from '../components/contextual-nav';

const TranscriptPage = ({ pathContext, data: { transcript } }) => (
  <section className="page bg-white text-dark">
    <div className="container-fluid">
      <ContextualNav history={history} to={pathContext.episodePath}>episode details</ContextualNav>
      <EpisodeTranscript html={transcript.html} {...pathContext} />
    </div>
  </section>
);

export const query = graphql`
  query TranscriptQuery($templateKey: String!, $episodeTitle: String!) {
    transcript: markdownRemark(frontmatter: { 
      episode: { eq: $episodeTitle }
      templateKey: { eq: $templateKey }
    }) {
      html
    }
  }
`;

export default TranscriptPage;
