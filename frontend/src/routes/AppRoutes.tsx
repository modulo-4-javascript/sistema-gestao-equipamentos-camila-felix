import { Routes, Route } from 'react-router-dom'
import { EquipmentListPage } from '../pages/EquipmentListPage/EquipmentListPage'
import { EquipmentDetailPage } from '../pages/EquipmentDetailPage/EquipmentDetailPage'
import { LocationsPage } from '../pages/LocationsPage/LocationsPage'

// Mapa de rotas da aplicação: cada caminho (path) renderiza uma página.
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EquipmentListPage />} />
      <Route path="/equipamentos/:id" element={<EquipmentDetailPage />} />
      <Route path="/localizacoes" element={<LocationsPage />} />
    </Routes>
  )
}
