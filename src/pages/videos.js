import React, { Component } from 'react';
import Videos from '../components/videos';

class VideosPage extends Component {
  render() {
    const { data: { 
      animations: {
        edges: animations,
      },
    } } = this.props;
console.log(animations);
    return (
      <main>
        <Videos videos={animations} />
      </main>
    );
  }
}

export const query = graphql`
  query VideosQuery {
    animations: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "animation" } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            vid
            title
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
`;

export default VideosPage;
