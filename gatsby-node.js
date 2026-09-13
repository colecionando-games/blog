const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const slugify = require("slugify")

const sanitizeSlug = (text) => slugify(text, { lower: true, strict: true })

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

  if (node.internal.type === "DatabaseJson") {
    const slug = createFilePath({
      node, getNode, basePath: "pages"
    })

    createNodeField({
      node, name: "slug", value: `${slug}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPostListTemplate = path.resolve(`./src/templates/blog-list.js`)
  const tagTemplate = path.resolve(`./src/templates/tags.js`)
  const categoryTemplate = path.resolve(`./src/templates/categories.js`)
  const gamesTemplate = path.resolve(`./src/templates/games.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
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
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
      gamesGroup: allDatabaseJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`)
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

  // blog list
  const postsPerPage = 24;
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

  // tags
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${sanitizeSlug(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue
      }
    })
  })

  // categorias
  const categories = result.data.categoriesGroup.group

  categories.forEach(category => {
    createPage({
      path: `/${sanitizeSlug(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      }
    })
  })

  // games
  const games = result.data.gamesGroup.edges

  games.forEach((game) => {
    const { slug } = game.node.fields
    createPage({
      path: `/games${slug}`,
      component: gamesTemplate,
      context: {
        slug: slug
      }
    })
  })
}
