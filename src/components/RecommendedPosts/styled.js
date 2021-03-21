import styled from 'styled-components'

export const RecommendedWrapper = styled.section`
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
`

export const RecommendedLink = styled.a`
  color: white;
  text-decoration: none;

  small {
    font-size: 0.8rem;
  }
  
  &.next {
    text-align: right;
  }
`