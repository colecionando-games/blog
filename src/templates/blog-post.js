import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Comments from "../components/Comments"
import RecommendedPosts from "../components/RecommendedPosts"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const prev = pageContext.previousPost
  const tags = post.frontmatter.tags ||  []
  const contentRef = useRef(null)

  const authorName = typeof post.frontmatter.author === "object"
    ? post.frontmatter.author?.name
    : post.frontmatter.author

  useEffect(() => {
    if (!contentRef.current) return

    const tables = contentRef.current.querySelectorAll("table")


    tables.forEach((table) => {
      if (table.parentElement && table.parentElement.classList.contains("table-wrapper")) {
        return
      }

      const divEl = document.createElement("div")
      divEl.className = "table-wraper"
      divEl.style.overflowX = "auto"

      table.parentNode.insertBefore(divEl, table)
      divEl.appendChild(table);
    })

  }, [post.html]);

  return (
    <Layout>
      <S.PostWrapper>
        <S.PostHeader>
          <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          {authorName && <S.PostAuthor>por {authorName}</S.PostAuthor>}
        </S.PostHeader>

        <S.MainContent ref={contentRef}>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

          {tags.length > 0 && (
            <S.PostTags>
              🏷{" "} 
              {tags.map((tag) => (
                <S.PostTag key={tag} to={`/tags/${tag}`}>{tag}</S.PostTag>
              ))}
            </S.PostTags>
          )}
        </S.MainContent>

        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </S.PostWrapper>

      <RecommendedPosts next={next} previous={prev} />
    </Layout>
  )
}

export const Head = ({ data, location }) => {
  const post = data.markdownRemark
  const authorName = typeof post.frontmatter.author === "object"
    ? post.frontmatter.author?.name
    : post.frontmatter.author

  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.cover}
      author={authorName}
      pathname={location.pathname}
      type="article"
    />
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
