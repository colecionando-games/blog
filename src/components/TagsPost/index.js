import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const TagsPost = ({ slug, category, date, title, description }) => (
  <S.TagsPostLink href={slug}>
    <S.TagsPostWrapper>
      <S.TagsPostTag>{category}</S.TagsPostTag>
      <S.TagsPostInfo>
        <S.TagsPostDate>{date}</S.TagsPostDate>
        <S.TagsPostTitle>{title}</S.TagsPostTitle>
        <S.TagsPostDescription>{description}</S.TagsPostDescription>
      </S.TagsPostInfo>
    </S.TagsPostWrapper>
  </S.TagsPostLink>
)

TagsPost.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TagsPost