import React from "react"
import ReactGA from "react-ga"

import links from "./content"

import * as S from "./styled"


const HeaderMenu = () => {
  
  const menuLinkClickTrack = link => {
    ReactGA.event({
      category: 'menu link',
      action: 'click',
      label: `Menu Link - ${link}`
    })
  }

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink cover direction="left" 
              bg="white" duration={0.6} to={link.url} 
              activeClassName="active"
              onClick={() => menuLinkClickTrack(link.label)}
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )

}

export default HeaderMenu