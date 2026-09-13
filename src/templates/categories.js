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
  
  return (
    <Layout>
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

export const Head = ({ pageContext, location }) => {
  const { category } = pageContext
  return (
    <Seo 
      title={`Categoria: ${category}`}
      description={`Posts marcados com "${category}".`}
      pathname={location.pathname}
    />
  )
}

Categories.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.object.isRequired
}

export default Categories

export const pageQuery = graphql`
  query CategoriesPage($category: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
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
