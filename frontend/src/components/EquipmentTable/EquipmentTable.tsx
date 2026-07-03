import styled from 'styled-components'
import { Link } from 'react-router-dom'
import type { Equipment } from '../../types/equipment'
import { StatusBadge } from '../StatusBadge/StatusBadge'

interface EquipmentTableProps {
  equipamentos: Equipment[]
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
`

const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  background-color: #f1f5f9;
  color: #475569;
  font-size: 0.85rem;
`

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.9rem;
  color: #0f172a;
`

// Tabela que lista os equipamentos. O nome de cada linha leva à página de detalhe.
export function EquipmentTable({ equipamentos }: EquipmentTableProps) {
  if (equipamentos.length === 0) {
    return <p>Nenhum equipamento encontrado.</p>
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th>Nome</Th>
          <Th>Categoria</Th>
          <Th>Patrimônio</Th>
          <Th>Status</Th>
        </tr>
      </thead>
      <tbody>
        {equipamentos.map((equipamento) => (
          <tr key={equipamento.id}>
            <Td>
              <Link to={`/equipamentos/${equipamento.id}`}>
                {equipamento.nome}
              </Link>
            </Td>
            <Td>{equipamento.categoria}</Td>
            <Td>{equipamento.patrimonio}</Td>
            <Td>
              <StatusBadge status={equipamento.status} />
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
