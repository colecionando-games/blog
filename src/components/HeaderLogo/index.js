import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const HeaderLogo = () => {
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <S.LogoLink cover direction="left" bg="white" duration={0.6} to={"/"} activeClassName="active">
      <S.LogoWrapper fluid={logoImage.childImageSharp.fluid} />
    </S.LogoLink>
  )

}

export default HeaderLogo