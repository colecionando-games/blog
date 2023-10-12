require("dotenv").config()

const pluginSetup = [ 
  `gatsby-plugin-react-helmet`,
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
      name: `database`,
      path: `${__dirname}/database`
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
  `gatsby-transformer-json`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-embed-video`,
        { 
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
            linkImagesToOriginal: false,
            showCaptions: true
          }
        },
        {
          resolve: `gatsby-remark-figure-caption`,
          options: {
            figureClassName: 'md-figure'
          }
        },
        `gatsby-remark-responsive-iframe`,
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
        `gatsby-remark-emoji`,
        {
          resolve: `gatsby-remark-external-links`,
          options: {
            target: "_blank",
            rel: "nofollow"
          }
        }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: `colecionando-games`
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
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {},
      allPageHeaders: [],
      mergeSecurityHeaders: true,
      mergeLinkHeaders: true,
      mergeCachingHeaders: true,
      transformHeaders: (headers, path) => headers,
      generateMatchPathRewrites: true
    }
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  //`gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `{
        site {
          siteMetadata {
            title
            description
            siteUrl
            site_url: siteUrl
          }
        }
      }`,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }]
              })
            })
          },
          query: `{
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    date
                  }
                  html
                  excerpt
                }
              }
            }
          }`,
          output: '/feed.xml',
          title: 'Colecionando.Games - RSS Feed'
        }
      ]
    }
  }
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
    description: `O manual do colecionador de videogames!`,
    author: `felipebbarbosa`,
    siteUrl: `https://blog.colecionando.games`
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`
  },
  plugins: pluginSetup,
  flags: {
    DEV_SSR: true,
    FAST_DEV: true
  }
}