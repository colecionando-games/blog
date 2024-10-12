import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "styled-media-query"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  justify-self: center;
  max-width: 350px;
  width: 100%;
  margin: 10px;

  ${media.lessThan("420px")`
    margin: 10px 15px;
  `}
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
  height: 100%;
  
`

export const PostItemTag = styled.div`
  background: rgb(255,183,0);
  background: linear-gradient(180deg, rgba(255,183,0,1) 0%, rgba(255,221,0,1) 100%);
  color: black;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 3px 10px 5px;
  position: absolute;
  right: -10px;
  top: -13px;
  z-index: 5;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.5rem 1.5rem;
  grid-area: post-item-info;
  position: relative;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: rgb(70, 70, 70);
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
