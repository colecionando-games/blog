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
        {links.map((link, i) => { 
          let linkKey = `menu-${i}`
          return (
          <S.MenuLinksItem key={linkKey}>
            <S.MenuLinksLink href={link.url} 
              onClick={() => menuLinkClickTrack(link.label)}
            >
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        )
        })}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )

}

export default HeaderMenu