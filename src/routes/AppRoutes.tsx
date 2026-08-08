import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../components/DefaultLayout"
import { Home } from "../pages/Home"
import { Pecas } from "../pages/Pecas"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* O Layout Pai que contém o Header, o Outlet e o Footer */}
                <Route path="/" element={<DefaultLayout />}>
                    {/* Página Inicial */}
                    <Route index element={<Home />} />

                    {/* Rotas dos Botões e Menu Dropdown */}
                    <Route path="/mostra/:tipo" element={< Pecas/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}