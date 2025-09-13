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
  margin: 10px 10px 0;
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

export const DialogOverlay = styled.div`
  background: rgba(0,0,0,0.7);
  position: fixed;
  inset: 0;
  z-index: 1000;
`

export const DialogContent = styled.div`
  background: #fff;
  border-radius: 2px;
  width: 100%;
  max-width: 960px;
  max-height: 90vh;
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`
