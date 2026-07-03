import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// Menu lateral da aplicação.
const Nav = styled.nav`
  grid-area: sidebar;
  background-color: #1e293b;
  padding: 1.5rem 1rem;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

// Link de navegação. O react-router adiciona a classe "active"
// automaticamente no link da página atual.
const MenuLink = styled(NavLink)`
  display: block;
  color: #cbd5e1;
  text-decoration: none;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;

  &:hover {
    background-color: #334155;
    color: #ffffff;
  }

  &.active {
    background-color: #334155;
    color: #ffffff;
  }
`

// Barra lateral com os links de navegação.
export function Sidebar() {
  return (
    <Nav>
      <MenuList>
        <li>
          <MenuLink to="/" end>
            Equipamentos
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/localizacoes">Localizações</MenuLink>
        </li>
      </MenuList>
    </Nav>
  )
}
