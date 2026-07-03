import './App.css'
import { AppLayout } from './layout/AppLayout/AppLayout'
import { EquipmentCard } from './components/EquipmentCard/EquipmentCard'
import type { Equipment } from './types/equipment'

// Lista de exemplo (dados fixos por enquanto; virão de uma API nas próximas aulas).
const equipamentos: Equipment[] = [
  {
    id: 1,
    nome: 'Notebook Dell Latitude',
    categoria: 'Informática',
    patrimonio: 'PAT-0001',
    status: 'disponivel',
  },
  {
    id: 2,
    nome: 'Projetor Epson',
    categoria: 'Áudio e Vídeo',
    patrimonio: 'PAT-0002',
    status: 'em_uso',
  },
  {
    id: 3,
    nome: 'Furadeira Bosch',
    categoria: 'Ferramentas',
    patrimonio: 'PAT-0003',
    status: 'manutencao',
  },
]

function App() {
  return (
    <AppLayout>
      <h2 className="page-title">Equipamentos cadastrados</h2>

      <section className="equipment-list">
        {equipamentos.map((equipamento) => (
          <EquipmentCard key={equipamento.id} equipment={equipamento} />
        ))}
      </section>
    </AppLayout>
  )
}

export default App
