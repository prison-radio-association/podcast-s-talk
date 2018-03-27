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
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: {}, // additional data can be passed via context
      });

      if (node.frontmatter.templateKey === 'episode') {
        createPage({
          path: `${node.frontmatter.path}/transcript`,
          component: path.resolve(`src/templates/transcript.js`),
          context: {
            episodePath: node.frontmatter.path,
          }, // additional data can be passed via context
        });
      }
    });
  });
};