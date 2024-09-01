import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  display: grid;
  grid-area: posts;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 70rem;
  width: 100%;
  margin: 0 auto 20px;
  padding: 0 20px;

  ${media.lessThan("large")`
    padding-top: 5px;
  `}
`