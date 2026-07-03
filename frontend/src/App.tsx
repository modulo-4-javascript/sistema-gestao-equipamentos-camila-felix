import './App.css'
import { AppLayout } from './layout/AppLayout/AppLayout'
import { AppRoutes } from './routes/AppRoutes'

// O App monta o layout e, dentro dele, renderiza a rota atual.
function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export default App
