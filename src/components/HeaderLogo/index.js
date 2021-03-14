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
    <S.LogoLink cover direction="left" bg="white" duration={0.6} to={"/"} activeClassName="active">
      <S.LogoWrapper image={logoImage.childImageSharp.gatsbyImageData} alt="Logo Colecionando.Games" />
    </S.LogoLink>
  )

}

export default HeaderLogo