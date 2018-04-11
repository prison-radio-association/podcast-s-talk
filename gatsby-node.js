const path = require('path');
const getPathFromId = require('./src/utils/get-path-from-id');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { ne: null }}},
        sort: { order: DESC, fields: [frontmatter___date] },
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              templateKey
              title
              audio
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.frontmatter.templateKey) {
        case 'transcript':
          const episode = result
            .data
            .allMarkdownRemark
            .edges
            .find(entity => {
              const frontmatter = entity.node.frontmatter;
              return frontmatter.templateKey === 'episode' && frontmatter.title === node.frontmatter.title;
            });

          if (episode) {
            createPage({
              path: getPathFromId(node.id),
              component: path.resolve(`src/templates/transcript.js`),
              context: {
                templateKey: node.frontmatter.templateKey,
                episode: episode.node,
                episodeTitle: episode.node.frontmatter.title,
              },
            });
          }
          break;

        case 'episode':
          const transcript = result
            .data
            .allMarkdownRemark
            .edges
            .find(entity => {
              const frontmatter = entity.node.frontmatter;
              return frontmatter.templateKey === 'transcript' && frontmatter.title === node.frontmatter.title;
            });

          createPage({
            path: `${node.frontmatter.path}`,
            component: path.resolve(`src/templates/episode.js`),
            context: {
              transcriptUrl: transcript && getPathFromId(transcript.node.id)
            },
          });
          break;

        default:
          if (typeof node.frontmatter.path !== 'undefined') {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
            });
          }
      }
    });
  });
};
