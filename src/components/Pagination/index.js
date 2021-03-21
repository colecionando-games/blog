import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const Pagination = props => (
  <S.PaginationWrapper>
    {!props.isFirst && (
      <a href={props.prevPage} rel="prev">
        Página anterior
      </a>
    )}
    <p>{props.currentPage} de {props.numPages}</p>
    {!props.isLast && (
      <a href={props.nextPage} rel="next">
        Próxima página
      </a>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string.isRequired,
  nextPage: propTypes.string.isRequired
}

export default Pagination