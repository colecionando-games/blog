import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const FooterWrapper = styled.footer`
  height: auto;
  padding: 20px 20px 30px;
  background: rgb(17, 17, 17);
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("large")`
    flex-direction: column;
  `}

`

export const FooterCopyrightBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const FooterCopyright = styled.span`
  max-width: 450px;
  margin-left: 10px;
  line-height: 1.2em;

  a {
    text-decoration: none;
    color: #2980b9;
  }

  small {
    font-size: 0.87em;
  }
`

export const FooterLogo = styled(GatsbyImage)`
  width: 80px;
`

export const FooterProjectCopy = styled.div`
  text-align: right;
  font-size: 0.8em;
  margin-right: 10px;
`

export const FooterSocialLinks = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none !important;

  a {
    color: white;
    text-decoration: none;
  }

  svg {
    margin: 5px;
  }

  ${media.lessThan("large")`
    margin-top: 32px;
  `}
`

export const SocialLink = styled.div`
  fill: #bbb;
  width: 42px;
  height: 42px;
  margin: 0 2px;
`

