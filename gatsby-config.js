const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Tworzenie stron internetowych i aplikacji webowych - web developer Łapy, Białystok`,
    description: `Programista front-endowy, tworzenie i projektowanie stron internetowych na terenie Łapy, Białystok - Podlasie. Tanie strony wizytówki, sklepy internetowe.`,
    author: `Krzysztof Zaleski`,
    siteUrl: 'https://kzaleski.pl',
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-R4M7QS0T5N", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
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
