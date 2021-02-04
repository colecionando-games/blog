import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const LogoWrapper = styled(Img)`
  width: 400px;
  margin: 20px 10px 20px 30px;

  ${media.lessThan("medium")`
    margin: 20px 15px 10px;
  `}
`