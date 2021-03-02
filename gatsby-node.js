const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

// to add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node, getNode, basePath: "pages"
    })

    createNodeField({
      node, name: "slug", value: `/${slug.slice(12)}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPostListTemplate = path.resolve(`./src/templates/blog-list.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
              category
              tags
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    tracedSVG
                  }
                }
              }
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous
      }
    })
  })

  const postsPerPage = 7;
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: blogPostListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1
      }
    })
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      }
    })
  })

}