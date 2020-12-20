import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.1rem;
  font-weight: normal;
  display: flex;
  flex-direction: row;
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

export const MenuLinksLink = styled(AniLink)`
  color: white;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    border-bottom: 2px solid yellow;
  }
`