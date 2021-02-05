import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;  
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
`

export const PostItemTag = styled.div`
  background-color: red;
  padding: 3px 10px 5px;
  color: white;
  margin-top: -15px;
  z-index: 5;
  text-transform: uppercase;
  border-radius: 10px;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.5rem 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
export const ThumbWrapper = styled(Img)`
  width:100%;
  border-radius: 5px 5px 0 0;
`
