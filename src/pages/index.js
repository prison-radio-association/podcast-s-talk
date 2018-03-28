import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Hero from '../components/hero';
import Episodes from '../components/episodes';
import About from '../components/about';
import Contact from '../components/contact';

class IndexPage extends Component {
  render() {
    const { data: { 
      episodes: { edges },
      aboutPage,
      contactPage,
    } } = this.props;

    return (
      <main>
        <Hero episode={edges[0]} />
        <div id="episodes"><Episodes episodes={edges} /></div>
        <div id="about"><About markup={aboutPage.html} /></div>
        <div id="contact"><Contact markup={contactPage.html} /></div>
      </main>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    episodes: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "episode" } } },
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...EpisodeFragment
        }
      }
    },
    aboutPage: markdownRemark(frontmatter: { name: { eq: "about" } }) {
      html
    },
    contactPage: markdownRemark(frontmatter: { name: { eq: "contact" } }) {
      html
    }
  }
`;

export default IndexPage;
