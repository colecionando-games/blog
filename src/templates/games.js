import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Lightbox from "../components/Lightbox"

import platformsData from "../components/Games/platforms"
import regionsData from "../components/Games/regions"

import * as S from "../components/Games/styled"

const Games = ({ pageContext }) => {

  const { title, developer, releases, pingbacks } = pageContext

  return (
    <Layout>
        <S.GameContent>
          <S.GameMainSection>
            <S.GameInfo>
              <S.GameTitle>{title}</S.GameTitle>
            </S.GameInfo>
          </S.GameMainSection>
          <S.GameSection>
            <S.GameSectionTitle>Edições lançadas</S.GameSectionTitle>
            {!releases ? <>nenhuma encontrada</> :
              releases.map(({ edition, version, platform, region, photos }) => {
                return (
                  <S.GameRelease>
                    <S.GameReleaseEdition>{edition}</S.GameReleaseEdition>
                    <S.GameReleaseVersion>{version}</S.GameReleaseVersion>
                    {platformsData.find(p => p.id === platform).name}<br></br>
                    <S.GameReleaseRegion>{regionsData.find(r => r.id === region).name}</S.GameReleaseRegion>
                    {!photos ? <></> : <Lightbox images={photos}></Lightbox>}
                  </S.GameRelease>
                )
              }) 
            }
          </S.GameSection>
          {!pingbacks ? <></> :
            <S.GameSection>
              <S.GameSectionTitle>Escrevemos sobre ele</S.GameSectionTitle>
              {pingbacks.map(pingback => {
                return (
                  <S.GamePingbackLink to={pingback.url}>
                    {pingback.title}
                  </S.GamePingbackLink>
                )
              })}
            </S.GameSection>
          }
        </S.GameContent>
    </Layout>
  )
}

Games.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
    developer: PropTypes.string,
    releases: PropTypes.arrayOf(
      PropTypes.shape({
        version: PropTypes.string,
        edition: PropTypes.string,
        region: PropTypes.string,
        photos: PropTypes.arrayOf(
          PropTypes.shape({
            caption: PropTypes.string,
            author: PropTypes.string,
            url: PropTypes.object
          })
        )
      })
    ),
    pingbacks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  })
}

export default Games