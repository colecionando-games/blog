import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import links from "./content"
import Icons from "./Icons"

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
      <S.FooterCopyrightBox>
        <S.FooterLogo image={logoFooter.childImageSharp.gatsbyImageData} alt="Logo Colecionado.Games"/>  
        <S.FooterCopyright>
          Colecionando.Games está sendo desenvolvido 
          por <a 
            href="https://www.twitter.com/felipebbarbosa" 
            title="Felipe B. Barbosa no Twitter"
            target="_blank" rel="noopener noreferrer">Felipe B. Barbosa</a> e 
          pertence ao grupo <a 
            href="https://www.vgscomcerveja.com.br"
            title="Site Videogames com Cerveja"
            target="_blank" rel="noopener noreferrer">Videogames com Cerveja</a>.
        </S.FooterCopyright>
      </S.FooterCopyrightBox>
      <S.FooterSocialLinks>
        {links.map((link, i) => { 
          const Icon = Icons[link.label]
          return (
            <li key={i}>
              <a href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                <S.SocialLink><Icon /></S.SocialLink>
              </a>
            </li>
          )
        })}
      </S.FooterSocialLinks>
    </S.FooterWrapper>
  )
}

export default Footer