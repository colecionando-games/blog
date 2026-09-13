import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

import * as S from "../components/ListWrapper/styled"

const BlogList = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <S.ListWrapper>
        { postList.map(({ node }) => (
            <PostItem
              key={node.fields.slug}
              slug={node.fields.slug}
              category={node.frontmatter.category}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              thumbnail={node.frontmatter.thumbnail}
            />
          )
        )}
      </S.ListWrapper>

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage} />
    </Layout>
  )
}

export const Head = ({ pageContext, location }) => {
  const { currentPage } = pageContext
  const pageTitle = currentPage === 1 ? "Home" : `Página ${currentPage}`

  return (
    <Seo title={pageTitle} pathname={location.pathname}>
      {currentPage > 1 && (
        <link 
          rel="prev"
          href={currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`}
        />
      )}
      {currentPage < pageContext.numPages && (
        <link rel="next" href={`/page/${currentPage + 1}`} />
      )}
    </Seo>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
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

export default BlogList
