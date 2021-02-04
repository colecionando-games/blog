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
  border-radius: 10px;
  padding: 1.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 5px;
  background: #fff;
  
`

export const PostItemTag = styled.div`
  background-color: red;
  color: white;
  border-radius: 50px;

`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  padding-top: 10px;
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
`
