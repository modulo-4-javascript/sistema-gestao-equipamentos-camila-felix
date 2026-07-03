import type { ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

// Props: recebe o conteúdo (children) que vai no meio do layout.
interface AppLayoutProps {
  children: ReactNode
}

// Estrutura geral em grid: header no topo, sidebar à esquerda e conteúdo no centro.
const Shell = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'sidebar content';
  min-height: 100vh;
`

const Content = styled.main`
  grid-area: content;
  padding: 1.5rem 2rem;
  background-color: #f8fafc;
`

// Layout base da aplicação: junta Header + Sidebar + conteúdo da página.
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Shell>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </Shell>
  )
}
