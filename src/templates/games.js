import React from "react"
import { graphql } from "gatsby"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Lightbox from "../components/Lightbox"

import distributorsData from "../components/Games/distributors"
import platformsData from "../components/Games/platforms"
import regionsData from "../components/Games/regions"

import * as S from "../components/Games/styled"

function fmtDate(date) {
  if (!date) return ""
  if (date.length === 4) return date

  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) return date

  const day = String(parsedDate.getDate()).padStart(2, "0")
  const month = String(parsedDate.getMonth() + 1).padStart(2, "0")
  const year = parsedDate.getFullYear()

  return `${day}/${month}/${year}`
}

const Games = ({ data }) => {
  const game = data.databaseJson
  if (!game) return null

  const { 
    title, 
    original_developer, 
    original_release_year,
    game_type,
    game_type_ref,
    releases, 
    pingbacks 
  } = game

  return (
    <Layout>
      <S.GameContent>
        <S.GameMainSection>
          <S.GameInfo>
            <S.GameTitle>{title}</S.GameTitle>
            <S.GameInfoSubtitle>
              <S.GameDeveloper>
                {original_release_year}, {original_developer}
              </S.GameDeveloper>
              {!!game_type && (
                <S.GameType>
                  <a href={game_type_ref}>{game_type}</a>
                </S.GameType>
              )}
            </S.GameInfoSubtitle>
          </S.GameInfo>
        </S.GameMainSection>

        <S.GameSection>
          <S.GameReleases>
            {!releases || releases.length === 0 ? (
              <div>nenhuma encontrada</div>
             ) : (
              releases.map(
                (
                  { platform, publisher, developer, description, release_date, regions },
                  pIndex
                ) => {
                  const platformObj = platformsData.find((p) => p.id === platform)

                  return (
                    <div key={platform || pIndex} style={{ marginBottom: '30px' }}>
                      {platformObj?.logo && (
                        <S.GameReleasePlatformLogo src={platformObj.logo} alt={platformObj.name || platform} />
                      )}
                      
                      <S.GameReleasePlatformInfo>
                        <span>
                          {fmtDate(release_date)}
                          {!!developer && ", " + developer}
                        </span>
                        {!!publisher && <span>{publisher}</span>}
                        {!!description && <p>{description}</p>}
                      </S.GameReleasePlatformInfo>
                      
                      {!regions || regions.length === 0 ? (
                        <div style={{ fontStyle: 'italic', marginTop: '7px', color: 'gray' }}>
                          Nenhum jogo cadastrado.
                        </div>
                       ) : (
                        regions.map(({ region, release_date: regDate, versions }, rIndex) => {
                          const regionObj = regionsData.find((r) => r.id === region)

                          return (
                            <S.GameReleaseRegion key={region || rIndex}>
                              <S.GameSectionTitle>
                                {regionObj?.name || region}
                              </S.GameSectionTitle>
                              <span>{fmtDate(regDate)}</span>
                              {versions?.map(
                                (
                                  { 
                                    edition, 
                                    case_format, 
                                    distributor, 
                                    version, 
                                    description: vDesc, 
                                    photos 
                                  }, vIndex
                                ) => {
                                  const distributorObj = distributorsData.find(
                                    (d) => d.id === distributor
                                  )
                                  return (
                                    <S.GameRelease key={version || vIndex}>
                                    {distributorObj?.logo && (
                                      <S.GameReleaseRegionDistributorLogo 
                                        src={distributorObj.logo}
                                        alt={distributorObj.name || distributor}
                                      />
                                    )}
                                    <S.GameReleaseInfo>
                                      <S.GameReleaseEdition>{edition}</S.GameReleaseEdition>
                                      <S.GameReleaseVersion>{version}</S.GameReleaseVersion>
                                      <S.GameReleaseCaseFormat>{case_format}</S.GameReleaseCaseFormat>
                                      <S.GameReleaseDescription>{vDesc}</S.GameReleaseDescription>
                                    </S.GameReleaseInfo>
                                    {!!photos && photos.length > 0 && (
                                      <Lightbox images={photos} />
                                    )}
                                  </S.GameRelease>
                                )
                              }
                            )}
                          </S.GameReleaseRegion>
                        )
                      })
                    )}
                  </div>
                )
              }
            ) 
          )}
        </S.GameReleases>
      </S.GameSection>
      
      {!!pingbacks && pingbacks.length > 0 && (
        <S.GamePingbacks>
          <span>Mais sobre {title} em:</span>
          {pingbacks.map(({ title: pTitle, url, external }, idx) => {
            if (external) {
              return (
                <S.GamePingbackExtLink key={url || idx} href={url} target="_blank" rel="noopener noreferrer">
                  {pTitle} ({external})
                  <LinkExternal size={16} style={{marginLeft:3, marginBottom:3}} />
                </S.GamePingbackExtLink>
              )
            } 
            
            return (
              <S.GamePingbackLink key={url || idx} to={url}>
                {title}
              </S.GamePingbackLink>
            )
          })}
        </S.GamePingbacks>
      )}
      </S.GameContent>
    </Layout>
  )
}

export const Head = ({ data, location }) => {
  const game = data.databaseJson
  return (
    <Seo
      title={game?.title}
      description={`Ficha técnica e edições lançadas de ${game?.title} (${game?.original_release_year}), desenvolvido por ${game?.original_developer}.`}
      pathname={location.pathname}
    />      
  )
}

export default Games

export const query = graphql`
  query GameBySlug($slug: String!) {
    databaseJson(fields: { slug: { eq: $slug } }) {
      title
      original_developer
      original_publisher
      original_release_year
      game_type
      game_type_ref
      releases {
        platform
        publisher
        developer
        description
        release_date
        regions {
          region
          release_date
          versions {
            version
            case_format
            edition
            description
            distributor
            photos {
              caption
              author
              url {
                childImageSharp {
                  gatsbyImageData(width: 1080, placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
      pingbacks {
        title
        url
        external
      }
    }
  }
`
