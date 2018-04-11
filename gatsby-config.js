const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Sex Talk',
    socialmedia: [
      'https://twitter.com/SexTalkRadioUK',
      'https://www.facebook.com/SexTalkPodcast/',
    ],
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    'gatsby-transformer-sharp',
    { 
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    '@jacobmischka/gatsby-plugin-react-svg',
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
    {
      resolve: 'gatsby-plugin-netlify-cms',
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
  ],
};
