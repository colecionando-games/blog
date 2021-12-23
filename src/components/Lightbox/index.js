import React, { useState } from "react"
import PropTypes from "prop-types"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

import * as S from "./styled"

const Lightbox = ({ images }) => {
  const [{ showLightbox, selectedImage }, setState] = useState({
    showLightbox: false,
    selectedImage: null
  })

  return (
    <>
      <S.LightboxContainer>
        {
          images.map(img => (
            <S.PreviewButton
              key={img.url.childImageSharp.id}
              type="button"
              onClick={() =>
                setState({ showLightbox: true, selectedImage: img })
              }>
              <S.LightboxPhoto 
                key={img.url.childImageSharp.id}
                image={img.url.childImageSharp.gatsbyImageData}
                alt={img.description}
              />
            </S.PreviewButton>
          ))
        }
      </S.LightboxContainer>
      {showLightbox && (
        <Dialog>
          <S.LightboxDialogPhoto
            image={selectedImage.url.childImageSharp.gatsbyImageData}
            alt={selectedImage.description}
          />
          <button type="button"
            onClick={() => setState({ showLightbox: false })}>Close</button>
        </Dialog>
      )}
    </>
  )
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired
}

export default Lightbox