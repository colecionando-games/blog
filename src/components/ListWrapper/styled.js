import styled from "styled-components"

export const ListWrapper = styled.section`
  display: grid;
  grid-area: posts;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 70rem;
  width: 100%;
  margin: 0 auto 20px;
  padding: 0 10px;
`