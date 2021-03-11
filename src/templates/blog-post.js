import React from "react"
import { graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const prev = pageContext.previousPost
  const tags = post.frontmatter.tags;

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.cover}
      />

      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        <S.PostAuthor>por {post.frontmatter.author.name}</S.PostAuthor>
      </S.PostHeader>

      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

        <S.PostTags>TAGS: 
          {tags.map(tag => (
            <S.PostTag cover direction="right" duration={0.6} to={`/tags/${kebabCase(tag)}`}>{tag}</S.PostTag>
          ))}
        </S.PostTags>
      </S.MainContent>

      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
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
        cover
        tags
        author {
          id
          name
          bio
          twitter
          instagram
        }
      }
      html
      timeToRead
    }
  }
`

export default BlogPost