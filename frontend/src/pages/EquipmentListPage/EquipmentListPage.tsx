import { useState } from 'react'
import { equipamentos } from '../../data/equipments'
import { SummaryCards } from '../../components/SummaryCards/SummaryCards'
import {
  EquipmentFilters,
  type StatusFilter,
} from '../../components/EquipmentFilters/EquipmentFilters'
import { EquipmentTable } from '../../components/EquipmentTable/EquipmentTable'

// Página inicial: resumo, filtros e tabela de equipamentos.
export function EquipmentListPage() {
  // Estado dos filtros (o que o usuário digitou/selecionou).
  const [busca, setBusca] = useState('')
  const [status, setStatus] = useState<StatusFilter>('todos')

  // Aplica os filtros de nome e status sobre a lista completa.
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

      <SummaryCards equipamentos={equipamentos} />

      <EquipmentFilters
        busca={busca}
        status={status}
        onBuscaChange={setBusca}
        onStatusChange={setStatus}
      />

      <EquipmentTable equipamentos={equipamentosFiltrados} />
    </>
  )
}
