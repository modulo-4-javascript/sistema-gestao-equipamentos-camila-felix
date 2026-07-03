import './App.css'
import { EquipmentCard } from './components/EquipmentCard/EquipmentCard'
import type { Equipment } from './types/equipment'

// Lista de exemplo (dados fixos por enquanto; nas próximas aulas virão de uma API).
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
    <main className="app">
      <h1>Sistema de Gestão de Equipamentos</h1>
      <p className="app__subtitle">Lista de equipamentos cadastrados</p>

      <section className="equipment-list">
        {equipamentos.map((equipamento) => (
          <EquipmentCard key={equipamento.id} equipment={equipamento} />
        ))}
      </section>
    </main>
  )
}

export default App
