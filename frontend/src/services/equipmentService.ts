import type { Equipment } from '../types/equipment'

// Busca a lista de equipamentos "na API".
// Aqui usamos um arquivo servido em /equipments.json como se fosse uma API real.
// Na prática, bastaria trocar a URL por um endpoint de verdade.
export async function fetchEquipments(): Promise<Equipment[]> {
  const resposta = await fetch('/equipments.json')

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os equipamentos.')
  }

  return resposta.json()
}
