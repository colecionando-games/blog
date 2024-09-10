import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Lightbox from "../components/Lightbox"

import distributorsData from "../components/Games/distributors"
import platformsData from "../components/Games/platforms"
import regionsData from "../components/Games/regions"

import * as S from "../components/Games/styled"

function fmtDate(date) {
  if (date === null) return "";

  if (date.length === 4) return date;

  const fmtDate = new Date(date);
  var day = fmtDate.getDate() + 1;
  var month = fmtDate.getMonth() + 1;
  var year = fmtDate.getFullYear();
  return day + "/" + month + "/" + year;
}

const Games = ({ pageContext }) => {

  const { 
    title, 
    original_developer, 
    original_publisher, 
    original_release_year,
    game_type,
    game_type_ref,
    releases, 
    pingbacks 
  } = pageContext

  return (
    <Layout>
        <Seo 
          title={title}
          description={original_developer} 
        />

        <S.GameContent>
          <S.GameMainSection>
            <S.GameInfo>
              <S.GameTitle>{title} </S.GameTitle>
              <S.GameInfoSubtitle>
                <S.GameDeveloper>{original_release_year}, {original_developer}</S.GameDeveloper>
                {!!game_type && <S.GameType><a href={game_type_ref}>{game_type}</a></S.GameType>}
              </S.GameInfoSubtitle>
            </S.GameInfo>
          </S.GameMainSection>
          <S.GameSection>
            <S.GameReleases>
            {!releases ? <>nenhuma encontrada</> :
              releases.map(({ platform, publisher, developer, description, release_date, regions }) => {
                return (
                  <div style={{ marginBottom: '30px' }}>
                    <S.GameReleasePlatformLogo src={platformsData.find(p => p.id === platform).logo}/>
                    <S.GameReleasePlatformInfo>
                      <span>{fmtDate(release_date)}{!!developer && ", " + developer}</span>
                      {!!publisher && <span>{publisher}</span>}
                      {!!description && <p>{description}</p>}
                    </S.GameReleasePlatformInfo>
                    {!regions ? <div style={{ fontStyle: 'italic', marginTop: '7px', color: 'gray' }}>Nenhum jogo cadastrado.</div> :
                      regions.map(({ region, release_date, versions }) => {
                        return (
                          <S.GameReleaseRegion>
                            <S.GameSectionTitle>
                              {regionsData.find(r => r.id === region).name}
                            </S.GameSectionTitle>
                            <span>{fmtDate(release_date)}</span>
                            {versions?.map(({ edition, distributor, version, description, photos }) => {
                              return (
                                <S.GameRelease>
                                  {!!distributor && <S.GameReleaseRegionDistributorLogo src={distributorsData.find(d => d.id === distributor).logo} />}
                                  <S.GameReleaseInfo>
                                    <S.GameReleaseEdition>{edition}</S.GameReleaseEdition>
                                    <S.GameReleaseVersion>{version}</S.GameReleaseVersion>
                                    <S.GameReleaseDescription>{description}</S.GameReleaseDescription>
                                  </S.GameReleaseInfo>
                                  {!!photos && <Lightbox images={photos}></Lightbox>}
                                </S.GameRelease>
                              )
                            })}
                          </S.GameReleaseRegion>
                        )
                      })
                    }
                  </div>
                )
              }) 
            }
            </S.GameReleases>
          </S.GameSection>
          {!pingbacks ? <></> :
            <S.GamePingbacks>
              <span>Mais sobre {title} em:</span>
              {pingbacks.map(pingback => {
                return (
                  <S.GamePingbackLink to={pingback.url}>
                    {pingback.title}
                  </S.GamePingbackLink>
                )
              })}
            </S.GamePingbacks>
          }
        </S.GameContent>
    </Layout>
  )
}

export default Games