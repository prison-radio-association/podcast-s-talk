import React from 'react';
import Hero from '../components/hero';
import Episodes from '../components/episodes';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <main>
    <Hero episode={edges[0]} />
    <Episodes episodes={edges} />
  </main>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "episode" } } },
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...EpisodeFragment
        }
      }
    }
  }
`;

export default IndexPage;
