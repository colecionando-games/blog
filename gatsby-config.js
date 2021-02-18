require("dotenv").config()

const pluginSetup = [
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  // needs to be the first to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        // this one is necessary when the images are outside of posts directory
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            name: `uploads`
          }
        },
        { 
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false
          }
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`
      ]
    }
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Roboto\:300,400,700`
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Colecionando.Games`,
      short_name: `C.G Blog`,
      start_url: `/`,
      background_color: `#248bfd`,
      theme_color: `#248bfd`,
      display: `minimal-ui`,
      icon: `static/assets/img/favicon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-sitemap`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`
]

if (process.env.CONTEXT === 'production') {
  const analytics = {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
      anonymize: true,
      respectDNT: true
    }
  }

  pluginSetup.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Colecionando.Games`,
    description: `Um site sobre o mundo do colecionismo de videogames.`,
    author: `Felipe B. Barbosa`,
    siteUrl: `https://blog.colecionando.games`
  },
  plugins: pluginSetup
}
