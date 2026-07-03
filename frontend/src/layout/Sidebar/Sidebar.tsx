import styled from 'styled-components'

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

const MenuItem = styled.li`
  color: #cbd5e1;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    background-color: #334155;
    color: #ffffff;
  }
`

// Barra lateral com os itens de navegação (por enquanto estáticos;
// as rotas de verdade chegam na aula-04).
export function Sidebar() {
  return (
    <Nav>
      <MenuList>
        <MenuItem>Equipamentos</MenuItem>
        <MenuItem>Localizações</MenuItem>
      </MenuList>
    </Nav>
  )
}
