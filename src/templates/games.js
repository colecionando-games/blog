import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Lightbox from "../components/Lightbox"

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
              <S.GameTitle>{title}</S.GameTitle>
              <S.GameDeveloper>{original_release_year}, {original_developer}</S.GameDeveloper>
            </S.GameInfo>
          </S.GameMainSection>
          <S.GameSection>
            <S.GameReleases>
            {!releases ? <>nenhuma encontrada</> :
              releases.map(({ platform, publisher, developer, edition, description, release_date, regions }) => {
                return (
                  <div style={{ marginBottom: '30px' }}>
                    {edition !== null ? <S.GameEditionTitle>{edition}</S.GameEditionTitle> : <></>}
                    <S.GameReleasePlatformLogo src={platformsData.find(p => p.id === platform).logo}/>
                    <span>{fmtDate(release_date)}{developer !== null ? "," : ""} {developer}</span><br></br>
                    <span>{publisher}</span>
                    <p>{description}</p>
                    {!regions ? <div style={{ fontStyle: 'italic', marginTop: '7px', color: 'gray' }}>Nenhum jogo cadastrado.</div> :
                      regions.map(({ region, release_date, versions }) => {
                        return (
                          <S.GameReleaseRegion>
                            <S.GameSectionTitle>
                              {regionsData.find(r => r.id === region).name}
                            </S.GameSectionTitle>
                            <span>{fmtDate(release_date)}</span>
                            {!versions ? <></> :
                                versions.map(({ edition, version, description, photos }) => {
                                  return (
                                    <S.GameRelease>
                                      <S.GameReleaseInfo>
                                        <S.GameReleaseEdition>{edition}</S.GameReleaseEdition>
                                        <S.GameReleaseVersion>{version}</S.GameReleaseVersion>
                                        <S.GameReleaseDescription>{description}</S.GameReleaseDescription>
                                      </S.GameReleaseInfo>
                                      {!photos ? <></> : <Lightbox images={photos}></Lightbox>}
                                    </S.GameRelease>
                                  )
                                })
                            }
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