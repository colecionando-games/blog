import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import * as S from "./styled"

const HeaderLogo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo_v2.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  return (
    <Link to="/" title="Voltar ao Home">
      <S.LogoWrapper key="logo" image={logoImage.childImageSharp.gatsbyImageData} alt="Logo Colecionando.Games" />
    </Link>
  )

}

export default HeaderLogo