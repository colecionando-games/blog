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
        <S.FooterLogo image={logoFooter.childImageSharp.gatsbyImageData} alt="Logo colecionado.games"/>  
        <S.FooterCopyright>
          &copy; 2025 colecionando.games<br></br>
          O manual do colecionador de videogames!<br></br>
          <small style={{ fontSize: "1rem" }}>
            <a href="mailto:colecionando.games@vgscomcerveja.com.br">entre em contato</a> • <a href="/sobre">sobre</a>
          </small>

        </S.FooterCopyright>
      </S.FooterCopyrightBox>
      <S.FooterSocialLinks>
        <S.FooterProjectCopy>
          um projeto<br></br>
          <a href="https://www.vgscomcerveja.com.br">videogames com cerveja</a>
        </S.FooterProjectCopy>
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
