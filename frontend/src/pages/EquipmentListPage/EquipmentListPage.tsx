import { Link } from 'react-router-dom'
import { equipamentos } from '../../data/equipments'
import { EquipmentCard } from '../../components/EquipmentCard/EquipmentCard'

// Página inicial: lista todos os equipamentos.
// Cada cartão é um link para a página de detalhe do equipamento.
export function EquipmentListPage() {
  return (
    <>
      <h2 className="page-title">Equipamentos cadastrados</h2>

      <section className="equipment-list">
        {equipamentos.map((equipamento) => (
          <Link
            key={equipamento.id}
            to={`/equipamentos/${equipamento.id}`}
            className="equipment-list__link"
          >
            <EquipmentCard equipment={equipamento} />
          </Link>
        ))}
      </section>
    </>
  )
}
