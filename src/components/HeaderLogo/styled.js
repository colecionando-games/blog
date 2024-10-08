import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "styled-media-query"

export const LogoWrapper = styled(GatsbyImage)`
  max-width: 400px;
  margin: 20px 10px 20px 30px;
  
  ${media.lessThan("large")`
    margin: 20px 15px 10px;
    
  `}
`