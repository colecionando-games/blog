import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const TagsHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  background-color: white;
  border-radius: 5px 5px 0 0;

  ${media.lessThan("large")`
    padding: 3rem 0 0;
    max-width: 100%;
    border-radius: 0;
  `}
`

export const TagsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto 0;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const TagsOtherTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  text-align: center;
  color: white;

  ${media.lessThan("large")`
    line-height: 1.1;
    padding: 0 1rem;
  `}
`


export const MainContent = styled.section`
  margin: 0 auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);

  ${media.lessThan("large")`
    padding: 2rem 0;
    max-width: 100%;
    border-radius: 0;
  `}
  p,
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
`

export const TagsPostList = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto 20px;
  padding: 0 10px;
`

export const AllTagsLink = styled(AniLink)`
  color: white;
  margin: 0 auto 20px;
  font-size: 1.2rem;
`