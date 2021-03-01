import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({ slug, category, date, timeToRead, title, description, thumbnail }) => (
  <S.PostItemLink cover direction="right" duration={0.6} to={slug}>
    <S.PostItemWrapper>
      <S.PostItemThumb fluid={thumbnail.childImageSharp.fluid} />
      <S.PostItemInfo>
         <S.PostItemTag>{category}</S.PostItemTag>
        <S.PostItemDate>{date} - {timeToRead} min de leitura</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem