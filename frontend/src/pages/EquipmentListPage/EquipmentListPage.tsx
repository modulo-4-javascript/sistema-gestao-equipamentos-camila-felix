import { useState } from 'react'
import { useEquipments } from '../../hooks/useEquipments'
import { SummaryCards } from '../../components/SummaryCards/SummaryCards'
import {
  EquipmentFilters,
  type StatusFilter,
} from '../../components/EquipmentFilters/EquipmentFilters'
import { EquipmentTable } from '../../components/EquipmentTable/EquipmentTable'

// Página inicial: resumo, filtros e tabela de equipamentos vindos da API.
export function EquipmentListPage() {
  // Dados carregados da API (com estados de carregamento e erro).
  const { equipamentos, carregando, erro } = useEquipments()

  // Estado dos filtros (o que o usuário digitou/selecionou).
  const [busca, setBusca] = useState('')
  const [status, setStatus] = useState<StatusFilter>('todos')

  // Aplica os filtros de nome e status sobre a lista carregada.
  const equipamentosFiltrados = equipamentos.filter((equipamento) => {
    const combinaBusca = equipamento.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
    const combinaStatus = status === 'todos' || equipamento.status === status
    return combinaBusca && combinaStatus
  })

  return (
    <>
      <h2 className="page-title">Equipamentos cadastrados</h2>

      {carregando && <p>Carregando equipamentos...</p>}
      {erro && <p>{erro}</p>}

      {!carregando && !erro && (
        <>
          <SummaryCards equipamentos={equipamentos} />

          <EquipmentFilters
            busca={busca}
            status={status}
            onBuscaChange={setBusca}
            onStatusChange={setStatus}
          />

          <EquipmentTable equipamentos={equipamentosFiltrados} />
        </>
      )}
    </>
  )
}
