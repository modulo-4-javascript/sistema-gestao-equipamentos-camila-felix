import { useEffect, useState } from 'react'
import type { Equipment } from '../types/equipment'
import { fetchEquipments } from '../services/equipmentService'

// Hook customizado que carrega os equipamentos da API e
// controla os estados de carregamento e erro.
export function useEquipments() {
  const [equipamentos, setEquipamentos] = useState<Equipment[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  // useEffect com lista vazia [] roda uma vez, quando o componente aparece.
  useEffect(() => {
    fetchEquipments()
      .then((dados) => setEquipamentos(dados))
      .catch((e: unknown) => {
        setErro(e instanceof Error ? e.message : 'Erro desconhecido')
      })
      .finally(() => setCarregando(false))
  }, [])

  return { equipamentos, carregando, erro }
}
