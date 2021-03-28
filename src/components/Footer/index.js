import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import * as S from "./styled"

const Footer = () => {
  const { logoFooter } = useStaticQuery(
    graphql`
      query {
        logoFooter: file(relativePath: { eq: "footer_logo.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }`
  )

  return (
    <S.FooterWrapper>
      <S.FooterLogo image={logoFooter.childImageSharp.gatsbyImageData} alt="Logo Colecionado.Games"/>
      <S.FooterCopyright>
        Colecionando.Games está sendo desenvolvido por 
        <Link to="https://www.twitter.com/felipebbarbosa">Felipe B. Barbosa</Link> 
        e pertence ao grupo 
        <Link to="https://www.vgscomcerveja.com.br">Videogames com Cerveja</Link>.
      </S.FooterCopyright>
    </S.FooterWrapper>
  )
}

export default Footer