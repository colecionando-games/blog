import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const HeaderLogo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  return (
    <a href="/" title="Voltar ao Home">
      <S.LogoWrapper key="logo" image={logoImage.childImageSharp.gatsbyImageData} alt="Logo Colecionando.Games" />
    </a>
  )

}

export default HeaderLogo