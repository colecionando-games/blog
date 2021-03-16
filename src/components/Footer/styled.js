import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const FooterWrapper = styled.footer`
  height: auto;
  padding: 20px 20px 30px;
  background: rgb(17, 17, 17);
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  

  a {
    text-decoration: none;
    color: #2980b9;
  }
`

export const FooterCopyright = styled.span`
  max-width: 400px;
  margin-left: 10px;
  line-height: 1.2em;
`

export const FooterLogo = styled(GatsbyImage)`
  width: 80px;
`

