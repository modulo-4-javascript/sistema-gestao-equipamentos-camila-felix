// Tipos do domínio de equipamentos.

// Status possíveis de um equipamento (union type: só aceita um destes valores).
export type EquipmentStatus = 'disponivel' | 'em_uso' | 'manutencao'

// Estrutura (formato) de um equipamento do sistema.
export interface Equipment {
  id: number
  nome: string
  categoria: string
  patrimonio: string
  status: EquipmentStatus
}
