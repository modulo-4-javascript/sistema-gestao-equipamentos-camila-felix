import styled from 'styled-components'
import type { EquipmentStatus } from '../../types/equipment'

// 'todos' representa a opção "sem filtro de status".
export type StatusFilter = EquipmentStatus | 'todos'

interface EquipmentFiltersProps {
  busca: string
  status: StatusFilter
  onBuscaChange: (valor: string) => void
  onStatusChange: (valor: StatusFilter) => void
}

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`

const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 0.55rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
`

const Select = styled.select`
  padding: 0.55rem 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
`

// Barra de filtros: campo de busca por nome + seletor de status.
// Componente "controlado": o valor vem das props e as mudanças sobem via callbacks.
export function EquipmentFilters({
  busca,
  status,
  onBuscaChange,
  onStatusChange,
}: EquipmentFiltersProps) {
  return (
    <Bar>
      <Input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(event) => onBuscaChange(event.target.value)}
      />
      <Select
        value={status}
        onChange={(event) => onStatusChange(event.target.value as StatusFilter)}
      >
        <option value="todos">Todos os status</option>
        <option value="disponivel">Disponível</option>
        <option value="em_uso">Em uso</option>
        <option value="manutencao">Manutenção</option>
      </Select>
    </Bar>
  )
}
