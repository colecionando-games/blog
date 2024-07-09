import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"


export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    margin: 8px 0 10px;
    height: 30px;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.3rem;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

export const MenuLinksItem = styled.li`
  padding: 2px 20px 6px;
  border-right: 2px dotted rgba(255,255,255,0.15);
  text-transform: lowercase;
  font-variant: small-caps;

  &:last-child {
    border-right: 0;
  }

  .active {
    border-bottom: 2px solid yellow;
  }
`

export const MenuLinksLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    border-bottom: 2px solid yellow;
  }
`

export const MenuLinksExtLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.5s;

  svg {
    height: 1.5rem;
    margin-right: 5px;
  }

  &:hover {
    border-bottom: 2px solid yellow;
  }

  ${media.lessThan("medium")`
    span {
      display: none;
    }
  `}
`