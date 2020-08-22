import styled from "styled-components"

export const ListWrapper = styled.section`
  body#grid & {
    display: grid;
    background-color: red;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`