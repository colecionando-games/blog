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
  } marcado${totalCount === 1 ? "" : "s"} com "${tag}"`
  
  return (
    <Layout>
      <S.TagsOtherTitle>{tagHeader}</S.TagsOtherTitle>

      <S.TagsPostList>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, category, description } = node.frontmatter
          return (
            <TagsPost
              key={slug}
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

export const Head = ({ pageContext, location }) => {
  const { tag } = pageContext
  return (
    <Seo
      title={`Tag: ${tag}`}
      description={`Posts marcados com "${tag}".`}
      pathname={location.pathname}
    />
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.object.isRequired
}

export default Tags

export const pageQuery = graphql`
  query TagsPage($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
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
