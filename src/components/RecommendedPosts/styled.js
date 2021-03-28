import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
`

export const RecommendedLink = styled(Link)`
  color: white;
  text-decoration: none;

  small {
    font-size: 0.8rem;
  }
  
  &.nextPost {
    text-align: right;
  }
`

