import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const LogoWrapper = styled(GatsbyImage)`
  width: 400px;
  margin: 20px 10px 20px 30px;

  ${media.lessThan("medium")`
    margin: 20px 15px 10px;
  `}
`
export const LogoLink = styled(AniLink)`
  transition: color 0.5s;
`