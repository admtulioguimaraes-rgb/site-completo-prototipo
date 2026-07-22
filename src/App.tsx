import { Route, Routes } from "react-router-dom"

import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Sobre from "@/pages/Sobre"
import Equipe from "@/pages/Equipe"
import AreasAtuacao from "@/pages/AreasAtuacao"
import AreaDetalhe from "@/pages/AreaDetalhe"
import Contato from "@/pages/Contato"
import NotFound from "@/pages/NotFound"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="areas-de-atuacao" element={<AreasAtuacao />} />
        <Route path="areas-de-atuacao/:slug" element={<AreaDetalhe />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
