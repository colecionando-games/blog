import styled from "styled-components"

export const ListWrapper = styled.section`
  display: grid;
  grid-area: posts;
  grid-gap: 11px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  padding: 0 20px 40px;
`