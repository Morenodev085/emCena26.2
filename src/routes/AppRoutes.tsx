import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DefaultLayout } from "../components/DefaultLayout" 
import { Home } from "../pages/Home"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* O Layout Pai que contém o Header, o Outlet e o Footer */}
                <Route path="/" element={<DefaultLayout />}>
                    {/* A Home vira a rota filha que aparece no meio */}
                    <Route index element={<Home />} />
                    
                    {/* Futuramente, você pode adicionar mais páginas aqui dentro:
                    <Route path="programacao" element={<Programacao />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}