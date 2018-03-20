import React from 'react';
import Hero from '../components/hero';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
  <main>{console.log(edges)}
    <Hero episode={edges[0]} />
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
