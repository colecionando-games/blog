import styled from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  width: 100%;
  height: auto;
  font-family: Roboto;
`
export const HeaderContent = styled.div`
  max-width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: auto;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`