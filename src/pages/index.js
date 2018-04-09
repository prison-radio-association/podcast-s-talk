import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import Episodes from '../components/episodes';
import About from '../components/about';
import Contact from '../components/contact';
import getPathFromId from '../utils/get-path-from-id';

class IndexPage extends Component {
  render() {
    const { data: { 
      episodes: { edges: episodeEdges },
      transcripts: { edges: transcriptEdges },
      aboutPage,
      contactPage,
      site: { siteMetadata: { socialmedia } },
    } } = this.props;

    const episodes = episodeEdges.map(episode => {
      const relatedTranscript = transcriptEdges.find(transcript => transcript.node.frontmatter.title === episode.node.frontmatter.title);

      if (relatedTranscript) {
        episode.node.transcriptUrl = getPathFromId(relatedTranscript.node.id);
      }

      return episode;
    });

    return (
      <main>
        <Helmet>
          <meta name="description" content={aboutPage.excerpt} />
        </Helmet>
        <Hero episode={episodes[episodes.length - 1]} />
        <div id="episodes"><Episodes episodes={episodes} /></div>
        <div id="about"><About markup={aboutPage.html} /></div>
        <div id="contact"><Contact markup={contactPage.html} socialmedia={socialmedia} /></div>
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
    transcripts: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "transcript" } } }) {
      edges {
        node {
          id,
          frontmatter {
            title
          }
        }
      }
    },
    aboutPage: markdownRemark(frontmatter: { name: { eq: "about" } }) {
      html,
      excerpt(pruneLength: 250)
    },
    contactPage: markdownRemark(frontmatter: { name: { eq: "contact" } }) {
      html
    },
    site {
      siteMetadata {
        socialmedia
      }
    }
  }
`;

export default IndexPage;
