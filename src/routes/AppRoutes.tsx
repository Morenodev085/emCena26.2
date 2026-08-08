import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../components/DefaultLayout"
import { Home } from "../pages/Home"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* O Layout Pai que contém o Header, o Outlet e o Footer */}
                <Route path="/" element={<DefaultLayout />}>
                    {/* Página Inicial */}
                    <Route index element={<Home />} />

                    {/* Rotas dos Botões e Menu Dropdown */}
                    <Route path="mostra/:categoria" element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}