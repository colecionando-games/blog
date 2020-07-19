import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const prev = pageContext.previousPost

  return (
    <>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <h1>{post.frontmatter.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost