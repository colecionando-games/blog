import React, { useEffect } from "react"
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
  const tags = post.frontmatter.tags;

  useEffect(() => {
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
      var divEl = document.createElement("div");
      divEl.style.overflowX = "auto";
      divEl.id = tables[i].id + "_div";
      tables[i].insertAdjacentElement("beforebegin", divEl);
      divEl.appendChild(tables[i]);
    }
  });

  return (
    <Layout>
      <Seo 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.cover}
        author={post.frontmatter.author}
      />

      <S.PostWrapper>
        <S.PostHeader>
          <S.PostDate>{post.frontmatter.date} • {post.timeToRead} min de leitura</S.PostDate>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          <S.PostAuthor>por {post.frontmatter.author.name}</S.PostAuthor>
        </S.PostHeader>

        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>

          <S.PostTags>🏷 
            {tags.map(tag => (
              <S.PostTag key={tag} to={`/tags/${tag}`}>{tag}</S.PostTag>
            ))}
          </S.PostTags>
        </S.MainContent>

        <Comments url={post.fields.slug} title={post.frontmatter.title} />
      </S.PostWrapper>

      <RecommendedPosts next={next} previous={prev} />
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