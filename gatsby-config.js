const path = require('path');

module.exports = {
  siteMetadata: {
    title: "KZaleski",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway\:300,400,500,700`
        ],
        display: 'swap'
      }
    },
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 700,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lists`,
        path: path.join(__dirname, `src`, 'assets', `images`, 'lists'),
      },
    },
    {
     resolve: `gatsby-source-instagram-all`,
     options: {
       access_token: "IGQVJWVW1wUXVjdjM0TGhJNzNwSlZAMZAE82b25XTEJNVXpBTWpWTXliMnRialhJMFdrWElEVjJZAU2huMjBBUFRYYUlUSHRfQVNTTjl6TmFqU0M5cXg2N0FKcENuUVJzMU1oVHkxX2p1LWpyTFpjLW1hYQZDZD"
     },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/assets/data`,
      },
    },
  ],
};
