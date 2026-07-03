import styled from 'styled-components'
import type { Equipment } from '../../types/equipment'

interface SummaryCardsProps {
  equipamentos: Equipment[]
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
`

const Value = styled.strong`
  display: block;
  font-size: 1.75rem;
  color: #0f172a;
`

const Label = styled.span`
  color: #64748b;
  font-size: 0.85rem;
`

// Cards de resumo: contam quantos equipamentos há em cada situação.
export function SummaryCards({ equipamentos }: SummaryCardsProps) {
  const total = equipamentos.length
  const disponiveis = equipamentos.filter((e) => e.status === 'disponivel').length
  const emUso = equipamentos.filter((e) => e.status === 'em_uso').length
  const manutencao = equipamentos.filter((e) => e.status === 'manutencao').length

  return (
    <Grid>
      <Card>
        <Value>{total}</Value>
        <Label>Total</Label>
      </Card>
      <Card>
        <Value>{disponiveis}</Value>
        <Label>Disponíveis</Label>
      </Card>
      <Card>
        <Value>{emUso}</Value>
        <Label>Em uso</Label>
      </Card>
      <Card>
        <Value>{manutencao}</Value>
        <Label>Em manutenção</Label>
      </Card>
    </Grid>
  )
}
