import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const TagsPostLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  justify-self: center;
`

export const TagsPostWrapper = styled.section`
  background: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`

export const TagsPostTag = styled.div`
  background: #f39c12;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 5;
  text-transform: uppercase;
  width: 80px;
`

export const TagsPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.5rem 1.5rem;
  
`

export const TagsPostDate = styled.time`
  font-size: 0.9rem;
`

export const TagsPostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const TagsPostDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
