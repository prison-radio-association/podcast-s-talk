const path = require('path');

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
            frontmatter {
              templateKey
              title
              episode
              path
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
              return frontmatter.templateKey === 'episode' && frontmatter.title === node.frontmatter.episode;
            });

          if (episode) {
            createPage({
              path: `${episode.node.frontmatter.path}/transcript`,
              component: path.resolve(`src/templates/transcript.js`),
              context: {
                templateKey: node.frontmatter.templateKey,
                episodeTitle: episode.node.frontmatter.title,
                episodePath: episode.node.frontmatter.path,
                episode: episode.node,
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
              return frontmatter.templateKey === 'transcript' && frontmatter.episode === node.frontmatter.title;
            });

          createPage({
            path: `${node.frontmatter.path}`,
            component: path.resolve(`src/templates/episode.js`),
            context: {
              hasTranscript: transcript ? true : false,
            },
          });
          break;

        default:
          createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
            context: {},
          });
      }
    });
  });
};