import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SamuelInvitation from './pages/SamuelInvitation'
import CarlaInvitation from './pages/CarlaInvitation'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Invitación de Samuel (Ruta raíz y alias) */}
        <Route path="/" element={<SamuelInvitation />} />
        <Route path="/samuel" element={<SamuelInvitation />} />
        <Route path="/samuel-veliz" element={<SamuelInvitation />} />
        <Route path="/samuel-antonio-veliz-benavides" element={<SamuelInvitation />} />

        {/* Invitación de Carla Mishel Gutierrez Veliz */}
        <Route path="/carla" element={<CarlaInvitation />} />
        <Route path="/carla-mishel-gutierrez-veliz" element={<CarlaInvitation />} />
        <Route path="/carla-gutierrez" element={<CarlaInvitation />} />

        {/* Ruta por defecto */}
        <Route path="*" element={<SamuelInvitation />} />
      </Routes>
    </BrowserRouter>
  )
}
