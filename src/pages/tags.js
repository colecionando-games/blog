import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as S from "../components/Tags/styled"


const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <Seo 
        title="TAGS"
        description="Todas as TAGS do blog" />

    <S.TagsWrapper>
      <S.TagsHeader>
        <S.TagsTitle>TAGS</S.TagsTitle>
      </S.TagsHeader>
      <S.MainContent>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </S.MainContent>
    </S.TagsWrapper>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`