import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import Episodes from '../components/episodes';
import About from '../components/about';
import Contact from '../components/contact';
import getPathFromId from '../utils/get-path-from-id';
import phe from './phe.png';
import posuk from './posuk.png';
import comicrelief from './comicrelief.png';

class IndexPage extends Component {
  render() {
    const { data: { 
      episodes: { edges: episodeEdges },
      animations,
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

    let heroVid;

    if (animations && animations.edges.length) {
      heroVid = animations.edges[0].node.frontmatter.vid
    }

    return (
      <main>
        <Helmet>
          <meta name="description" content={aboutPage.excerpt} />
        </Helmet>
        <Hero episode={episodes[0]} vid={heroVid} />
        <div id="episodes"><Episodes episodes={episodes} /></div>
        <div id="about"><About markup={aboutPage.html} /></div>
        <div id="contact"><Contact markup={contactPage.html} socialmedia={socialmedia} /></div>
        <div id="footer" className="py-4 text-white">
          <div className="container-fluid">
            <h3 className="mb-4">Supported By</h3>
            <div className="supported-by">
              <a className="mr-5 mb-4" href="https://www.gov.uk/government/organisations/public-health-england" target="_blank">
                <img src={phe} alt="Public Health England" />
              </a>
              <a className="mr-5 mb-4" href="http://positivelyuk.org/" target="_blank">
                <img src={posuk} alt="Postively UK" />
              </a>
              <a className="mb-3" href="https://www.comicrelief.com/" target="_blank">
                <img src={comicrelief} alt="Comic Relief" />
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    episodes: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "episode" } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...EpisodeFragment
        }
      }
    },
    animations: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "animation" } } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            vid
          }
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
