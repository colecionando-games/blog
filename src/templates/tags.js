import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import TagsPost from "../components/TagsPost"

import * as S from "../components/Tags/styled"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } marcados com "${tag}"`
  const pageTitle = `Tag: ${tag}`
  const pageDescription = `Posts marcados com "${tag}".`

  return (
    <Layout>
      <Seo 
        title={pageTitle}
        description={pageDescription} />
      
        <S.TagsOtherTitle>{tagHeader}</S.TagsOtherTitle>

        <S.TagsPostList>

          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title, category, description } = node.frontmatter
            return (
              <TagsPost
                slug={slug}
                title={title}
                category={category}
                description={description}
              />
            )
          })}

          <S.AllTagsLink to="/tags">todas as tags</S.AllTagsLink>

        </S.TagsPostList>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
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

export default Tags

export const pageQuery = graphql`
query($tag: String) {
  allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
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
        }
      }
    }
  }
}
`