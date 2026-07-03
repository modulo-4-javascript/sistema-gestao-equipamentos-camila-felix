import type { EquipmentStatus } from '../../types/equipment'
import './StatusBadge.css'

// Props do componente: recebe apenas o status do equipamento.
interface StatusBadgeProps {
  status: EquipmentStatus
}

// Texto amigável para mostrar em cada status.
const STATUS_LABEL: Record<EquipmentStatus, string> = {
  disponivel: 'Disponível',
  em_uso: 'Em uso',
  manutencao: 'Manutenção',
}

// Etiqueta colorida que exibe o status do equipamento.
export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {STATUS_LABEL[status]}
    </span>
  )
}
