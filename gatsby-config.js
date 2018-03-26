const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Sex Talk',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/content`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: '@jacobmischka/gatsby-plugin-react-svg',
      options: {
          // include: /assets/
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions']
          }),
        ],
        precision: 8,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      // options: {
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
