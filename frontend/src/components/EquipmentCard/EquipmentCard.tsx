import type { Equipment } from '../../types/equipment'
import { StatusBadge } from '../StatusBadge/StatusBadge'
import './EquipmentCard.css'

// Props: recebe um equipamento inteiro e mostra os dados dele.
interface EquipmentCardProps {
  equipment: Equipment
}

// Cartão que exibe as informações de um equipamento.
export function EquipmentCard({ equipment }: EquipmentCardProps) {
  return (
    <article className="equipment-card">
      <header className="equipment-card__header">
        <h3 className="equipment-card__title">{equipment.nome}</h3>
        <StatusBadge status={equipment.status} />
      </header>
      <p className="equipment-card__category">{equipment.categoria}</p>
      <p className="equipment-card__patrimonio">
        Patrimônio: {equipment.patrimonio}
      </p>
    </article>
  )
}
