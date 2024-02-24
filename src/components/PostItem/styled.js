import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  justify-self: center;
`

export const PostItemWrapper = styled.section`
  background: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
  display: grid;

  grid-template-rows: 200px auto;
  grid-template-areas:
    "post-item-thumb"
    "post-item-info";
`

export const PostItemThumb = styled(GatsbyImage)`
  grid-area: post-item-thumb;
  max-width: 100%;
  height: 100%;
  
`

export const PostItemTag = styled.div`
  background: #f39c12;
  padding: 3px 10px 5px;
  color: white;
  margin: -25px auto 10px;
  z-index: 5;
  text-transform: uppercase;
  border-radius: 10px;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.5rem 1.5rem;
  grid-area: post-item-info;
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
