import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Lightbox = styled.div`
`

export const LightboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan("large")`
    justify-content: center;
  `}
`

export const LightboxPhoto = styled(GatsbyImage)`
  margin: 0 0 3px 0;
  width: 320px;
  cursor: pointer;
  ${media.lessThan("large")`
    width: 100%;
    margin: 0 0 5px;
  `}
`

export const LightboxDialogPhoto = styled(GatsbyImage)`
  margin: 10px;
`

export const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 5px 5px;
  border: 5px solid white;
  box-shadow: 1px 2px 4px gray;
`

export const CloseButton = styled.button`
  margin: 10px;
`

export const AuthorLink = styled(Link)``