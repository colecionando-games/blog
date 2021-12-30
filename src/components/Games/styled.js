import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const GameContent = styled.div``

export const GameMainSection = styled.section`
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`

export const GameInfo = styled.section`
  width: 100%;
  margin: 0 20px;
`

export const GameTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: white;

  ${media.lessThan("large")`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const GameSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem 7px;
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const GameSection = styled.section`
  margin: 10px auto;
  padding: 20px 40px;
  width: 100%;
`

export const GameReleaseEdition = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

export const GameReleaseVersion = styled.h2`
  font-size: 1.5rem;
  
  text-transform: lowercase;
  font-variant: small-caps;

  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
  `}
`

export const GameRelease = styled.div`
  margin: 10px;
  background-color: white;
  padding: 10px;
  box-shadow: 1px 2px 4px gray;
`

export const GameReleaseInfo = styled.div`
  padding: 10px;
`

export const GameReleaseTitle = styled.h3`
  font-size: 1.3em;
`

export const GameReleaseRegion = styled.div`
  margin-bottom: 10px;
`

export const GamePingbackLink = styled(Link)`
  color: white;
  transition: color 0.5s;
  padding-left: 2rem;
  line-height: 2rem;
`