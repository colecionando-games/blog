import styled from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  font-family: Roboto;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`