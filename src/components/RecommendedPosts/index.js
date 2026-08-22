import React from "react"
import propTypes from "prop-types"

import { trackEvent } from "../../utils/analytics"

import * as S from "./styled"

const RecommendedClickTrack = () => {
  trackEvent("click", {
    event_category: "menu link",
    event_label: "Clicou em um post recomendado"
  })
}

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug}
        className="previousPost" onClick={() => RecommendedClickTrack()}>
          <small>POST ANTERIOR</small><br></br>
          {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink to={next.fields.slug}
        className="nextPost" onClick={() => RecommendedClickTrack()}>
          <small>PRÓXIMO POST</small><br></br>
          {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    })
  })
}

export default RecommendedPosts
