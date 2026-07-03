import type { Equipment } from '../types/equipment'

// Dados de exemplo compartilhados entre as páginas.
// (Na aula-06 estes dados passarão a vir de uma API.)
export const equipamentos: Equipment[] = [
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
