import React from "react"

import HeaderLogo from "../HeaderLogo"
import HeaderMenu from "../HeaderMenu"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderContent>
      <HeaderLogo />
      <HeaderMenu />
    </S.HeaderContent>
  </S.HeaderWrapper>
)

export default Header