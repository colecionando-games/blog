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
  padding: 0 40px;
`

export const GameInfo = styled.section`
  width: 100%;
  margin: 0 20px;
  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const GameTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
  `}
`

export const GameDeveloper = styled.h2`
  
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

export const GameEditionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  padding: 2px 20px 10px;
  margin-bottom: 20px;
  text-transform: lowercase;
  font-variant: small-caps;
  background-color: rgba(66, 66, 66, 0.5);
  color: white;
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
  box-shadow: 1px 2px 4px gray;
`

export const GameReleaseEdition = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
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
  margin-bottom: 40px;
  ${media.lessThan("large")`
    text-align: center;
  `}
`

export const GamePingbackLink = styled(Link)`
  color: white;
  transition: color 0.5s;
  padding-left: 2rem;
  line-height: 2rem;
  ${media.lessThan("large")`
    padding: 0;
  `}
`