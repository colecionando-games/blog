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

  const close = () => setState({ showLightbox: false });

  return (
    <S.Lightbox>
      <S.LightboxContainer>
        {
          images.map(img => (
            <S.PreviewButton
              key={img.url.childImageSharp.id}
              type="button"
              onClick={() => setState({ showLightbox: true, selectedImage: img })}>
              <S.LightboxPhoto 
                key={img.url.childImageSharp.id}
                image={img.url.childImageSharp.gatsbyImageData}
                alt={img.description}
              /><br></br>
              {!img.author ? <></> : <>Foto: {img.author}</>}
            </S.PreviewButton>
          ))
        }
      </S.LightboxContainer>
      {showLightbox && (
        <Dialog onDismiss={close}>
          <S.LightboxDialogPhoto
            image={selectedImage.url.childImageSharp.gatsbyImageData}
            alt={selectedImage.description} />
          <p></p>
          <S.CloseButton onClick={close}>
            Fechar
          </S.CloseButton>
        </Dialog>
      )}
    </S.Lightbox>
  )
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired
}

export default Lightbox