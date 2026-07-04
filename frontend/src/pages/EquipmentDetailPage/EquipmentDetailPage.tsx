import { Link, useParams } from 'react-router-dom'
import { useEquipments } from '../../hooks/useEquipments'
import { StatusBadge } from '../../components/StatusBadge/StatusBadge'

// Página de detalhe de um equipamento.
// Usa o parâmetro :id da URL e os dados vindos da API.
export function EquipmentDetailPage() {
  const { id } = useParams()
  const { equipamentos, carregando, erro } = useEquipments()

  if (carregando) {
    return <p>Carregando...</p>
  }

  if (erro) {
    return <p>{erro}</p>
  }

  const equipamento = equipamentos.find((item) => item.id === Number(id))

  // Se o id da URL não existir na lista, mostramos um aviso.
  if (!equipamento) {
    return (
      <div>
        <h2 className="page-title">Equipamento não encontrado</h2>
        <Link to="/">← Voltar para a lista</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">← Voltar para a lista</Link>
      <h2 className="page-title">{equipamento.nome}</h2>
      <p>Categoria: {equipamento.categoria}</p>
      <p>Patrimônio: {equipamento.patrimonio}</p>
      <p>
        Status: <StatusBadge status={equipamento.status} />
      </p>
    </div>
  )
}
