import React from "react"
import propTypes from "prop-types"
import ReactGA from "react-ga"

import * as S from "./styled"

const RecommendedClickTrack = () => {
  ReactGA.event({
    category: "menu link",
    action: "click",
    label: "Clicou em um post recomendado"
  })
}

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink 
        to={previous.fields.slug}
        cover direction="left" className="previous"
        onClick={() => RecommendedClickTrack()}>
          <small>POST ANTERIOR</small><br></br>
          {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink 
        to={next.fields.slug}
        cover direction="right" className="next"
        onClick={() => RecommendedClickTrack()}>
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