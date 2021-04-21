import React from "react"
import { Disqus } from "gatsby-plugin-disqus"
import PropTypes from "prop-types"

import * as S from "./styled"

const Comments = ({ url, title }) => {

  const completeURL = `https://blog.colecionando.games${url}`

  let disqusConfig = {
    url: completeURL,
    identifier: completeURL,
    title: title
  }

  return (
    <S.CommentsWrapper>

      <S.CommentsTitle>Comentários</S.CommentsTitle>

      <Disqus config={disqusConfig} />
    </S.CommentsWrapper>
  )

}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments