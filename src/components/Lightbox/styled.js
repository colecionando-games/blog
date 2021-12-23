import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const LightboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan("large")`
    justify-content: center;
  `}
`

export const LightboxPhoto = styled(GatsbyImage)`
  margin: 0 5px 5px;
  width: 320px;
`

export const LightboxDialogPhoto = styled(GatsbyImage)`

`

export const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`
