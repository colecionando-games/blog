import React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"


import * as S from "./styled"

const Pagination = props => (
  <S.PaginationWrapper>
    {!props.isFirst && (
      <Link to={props.prevPage} rel="prev">
        Página anterior
      </Link>
    )}
    <p>{props.currentPage} de {props.numPages}</p>
    {!props.isLast && (
      <Link to={props.nextPage} rel="next">
        Próxima página
      </Link>
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