require("dotenv").config()

const pluginSetup = [ 
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  {
    // needs to be the first to work with gatsby-remark-images
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'mappings',
      path: `${__dirname}/content/`
    }
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-transformer-yaml`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        // this one is necessary when the images are outside of posts directory
        {
          resolve: `gatsby-remark-relative-images-v2`,
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
      icon: `static/assets/img/favicon.png` // This path is relative to the root of the site.
    }
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
      trackingIds: [
        process.env.GOOGLE_ANALYTICS_ID
      ],
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
    author: `felipebbarbosa`,
    siteUrl: `https://blog.colecionando.games`
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`
  },
  plugins: pluginSetup,
  flags: {
    DEV_SSR: false,
    FAST_DEV: true
  }
}