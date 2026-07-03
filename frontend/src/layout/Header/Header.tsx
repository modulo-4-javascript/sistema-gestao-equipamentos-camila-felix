import styled from 'styled-components'

// Barra do topo da aplicação.
const Bar = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 1.5rem;
  background-color: #0f172a;
  color: #f8fafc;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 600;
`

// Cabeçalho fixo com o nome do sistema.
export function Header() {
  return (
    <Bar>
      <Title>Sistema de Gestão de Equipamentos</Title>
    </Bar>
  )
}
