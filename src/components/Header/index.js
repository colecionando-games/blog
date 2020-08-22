import React from "react"

import HeaderLogo from "../HeaderLogo"
import HeaderMenu from "../HeaderMenu"

import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <HeaderLogo />
    <HeaderMenu />
  </S.HeaderWrapper>
)

export default Header