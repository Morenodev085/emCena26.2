import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function DefaultLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Adicionado pt-8 aqui para criar o espaço entre o header e o conteúdo de baixo */}
            <div className="flex-1 flex flex-col pt-8">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}