import React, { useState } from "react"
import PropTypes from "prop-types"
import * as Dialog from '@radix-ui/react-dialog'

import * as S from "./styled"
import "./custom-dialog-style.css"

const Lightbox = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <S.Lightbox>
      <S.LightboxContainer>
        {
          images.map(img => (
            <S.PreviewButton
              key={img.url.childImageSharp.id}
              type="button"
              onClick={() => setSelectedImage(img)}
              aria-label={`Abrir imagem ${img.description}`}
            >
              <S.LightboxPhoto 
                image={img.url.childImageSharp.gatsbyImageData}
                alt={img.description}
              /><br/>
              {img.author && <>Foto: {img.author}</>}
            </S.PreviewButton>
          ))
        }
      </S.LightboxContainer>
      <Dialog.Root open={!!selectedImage} onOpenChange={open => !open && setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <S.DialogOverlay />
          </Dialog.Overlay>
          <Dialog.Content asChild>
            <S.DialogContent>
              {selectedImage && (
                <>
                  <Dialog.Title>{selectedImage.description}</Dialog.Title>
                  <S.LightboxDialogPhoto
                    image={selectedImage.url.childImageSharp.gatsbyImageData}
                    alt={selectedImage.description} 
                  />
                  <p></p>
                  <Dialog.Close asChild>
                    <S.CloseButton>Fechar</S.CloseButton>
                  </Dialog.Close>
                </>
              )}
            </S.DialogContent>
          </Dialog.Content>
        </Dialog.Portal>        
      </Dialog.Root>      
    </S.Lightbox>
  )
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired
}

export default Lightbox
