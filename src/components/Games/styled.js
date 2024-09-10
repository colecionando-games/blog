import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const GameContent = styled.section`
  margin: auto;
  max-width: 70rem;
  width: 100%;

  ${media.lessThan("large")`
    max-width: 100%;
  `}
`

export const GameMainSection = styled.section`
  margin: 0 auto;
`

export const GameInfo = styled.section`
  width: 100%;
  margin: 0;
  padding: 12px 20px 0;
  background: rgba(0, 0, 0, 0.1);
`

export const GameTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 14px;
  

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
  `}
`

export const GameDeveloper = styled.span`
  background: rgb(255,183,0);
  background: linear-gradient(180deg, rgba(255,183,0,1) 0%, rgba(255,221,0,1) 100%);
  color: black;
  padding: 2px 10px 5px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`

export const GameType = styled.small`
  background: rgb(112,112,112);
  background: linear-gradient(188deg, rgba(112,112,112,1) 0%, rgba(204,204,204,1) 100%);
  padding: 2px 10px 5px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  margin-left: 10px;

  > a {
    text-decoration: none;
    color: black;
  }
`

export const GameSectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0 0 6px 0;
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
  `}
`

export const GameSection = styled.section`
  margin: 10px auto;
  padding: 10px 0;
  width: 100%;
`

export const GameReleases = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`

export const GameReleaseEdition = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: gray;
  margin-bottom: 2px;
`

export const GameReleaseVersion = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
  color: #424242;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
  `}
`

export const GameReleaseDescription = styled.p`
  margin-top: 5px;
  color: gray;
`

export const GameReleasePlatformLogo = styled.img`
  height: 35px;
  margin: 5px 0;
`

export const GameRelease = styled.div``

export const GameReleaseInfo = styled.div`
  padding: 10px;
`

export const GameReleaseTitle = styled.h3`
  font-size: 1.3em;
`

export const GameReleaseRegion = styled.div`
  margin: 10px 0;
`

export const GamePingbacks = styled.section`
  margin: -45px -15px 20px 15px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;  

  background: rgb(255,183,0);
  background: linear-gradient(180deg, rgba(255,183,0,1) 0%, rgba(255,221,0,1) 100%);
  color: black;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  ${media.lessThan("large")`
    margin-right: 0;
  `}
`

export const GamePingbackLink = styled(Link)`
  color: black;
  font-weight: bold;
  transition: color 0.5s;
  line-height: 1.2rem;
  margin: 4px 0 0;
`