import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px;
  padding: 0 20px;

  ${media.lessThan("large")`
    padding-top: 5px;
  `}
`