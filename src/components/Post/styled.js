import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  width: 100%;

  ${media.lessThan("large")`
    max-width: 100%;
  `}
`

export const PostHeader = styled.header`
  color: var(--postColor);
  padding: 5rem 5rem 0;
  background-color: white;
  border-radius: 5px 5px 0 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    border-radius: 0;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostAuthor = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  margin-top: 12px;
  ${media.lessThan("large")`
    padding: 0 1rem;
  `}
`

export const PostTags = styled.p`
  font-size: 1rem !important;
`

export const PostTag = styled(Link)`
  margin-left: 7px;
`

export const MainContent = styled.section`
  margin: 0 auto;
  padding: 2rem 5rem;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
  
  ${media.lessThan("large")`
    padding: 2rem 0;
    border-radius: 0;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--postColor);
    font-size: 1.25rem;
    line-height: 1.2;
    padding: 0 1.4rem;
    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: #444;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  table {
    width: 100%;

    th {
      border-bottom: 1px solid gray;
      padding: 5px 10px;
      font-weight: bold;
    }
    tr:nth-child(even) {
      background: #d2d2d2;
    }
    td {
      padding: 10px;
    }
  }
  .md-figure {
    max-width: 960px;
    img {
      margin: 0 auto; 
    }
    figcaption {
      padding: 5px 10px;
      text-align: center;
    }
  }
`