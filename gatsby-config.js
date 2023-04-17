const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

module.exports = {
  siteMetadata: {
    title: 'Vymo',
    description:
      'Sales Engagement Platform of choice for leading Financial Institutions. Used by 300k+ salespeople across 65+ enterprises such as Berkshire Hathaway, Sunlife, BNP Paribas, AXA, AIA.',
    author: 'Vymo',
    siteUrl: `https://vymo-test.netlify.app/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Brucira Gatsby Starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },    
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: '@builder.io/gatsby',
      options: {
        // Replace with your Public API Key
        publicAPIKey: 'ae60c6be4f36433a869eb9b26db8d120',
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/page.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    },
  ],
};
