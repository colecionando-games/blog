import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

import * as S from "../components/ListWrapper/styled"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allMarkdownRemark
  const pageTitle = `Categoria: ${category}`
  const pageDescription = `Posts marcados com "${category}".`

  return (
    <Layout>
      <Seo 
        title={pageTitle}
        description={pageDescription} />

      <S.ListWrapper>

        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, description, date, thumbnail } = node.frontmatter
          return (
            <PostItem
              slug={slug}
              category={category}
              date={date}
              timeToRead={node.timeToRead}
              title={title}
              description={description}
              thumbnail={thumbnail}
            />
          )
        })}

      </S.ListWrapper>

    </Layout>
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              category: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Categories

export const pageQuery = graphql`
query($category: String) {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { category: { eq: $category } } }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          category
          description
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        timeToRead
      }
    }
  }
}
`