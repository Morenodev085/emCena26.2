import { CiInstagram } from "react-icons/ci";
import logo from "../assets/logoFundos.png";
import linha from "../assets/Página 9 virado.png";

export function Footer() {
    return (
        <footer className=" text-white shadow-inner">

            {/* Faixa decorativa de ponta a ponta com 4px de altura e imagem repetida em loop */}
            <div
                className="w-full h-6 bg-repeat-x bg-center"
                style={{
                    backgroundImage: `url(${linha})`,
                    backgroundSize: "contain" // Força a imagem inteira a caber na altura sem cortar
                }}
            />

            {/* Conteúdo do rodapé */}
            <div className="container mx-auto px-4 max-w-7xl w-full py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="flex items-center">
                    <a href="/" className="cursor-pointer">
                        <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                    </a>
                </div>

                {/* Copyright centralizado */}
                <div className="text-center text-sm text-[var(--bege-claro)]">
                    <p>&copy; 2026 Niterói em Cena. Todos os direitos reservados.</p>
                </div>

                {/* Instagram à direita */}
                <div className="flex items-center">
                    <a
                        href="https://www.instagram.com/niteroiemcena/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 flex items-center"
                    >
                        <CiInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}