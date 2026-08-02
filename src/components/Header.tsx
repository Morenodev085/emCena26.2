import { useState } from "react";
import logo1 from "../assets/LOGO 1a.png";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-[var(--petroleo)] px-8 py-6 shadow-lg relative z-[100]">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-6">
                
                {/* Logo */}
                <div className="flex items-center justify-start my-4">
                    <img src={logo1} alt="Logo do Festival" className="w-[260px] md:w-[300px] h-auto object-contain block" />
                </div>
                
                {/* Menu Desktop */}
                <nav className="hidden md:block w-auto">
                    <ul className="flex flex-row items-center gap-4">
                        <li>
                            <a href="/programacao" className="px-8 py-4 bg-[var(--rosa-coral)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Programação
                            </a>
                        </li>
                        <li>
                            <a href="/ponto-de-encontro" className="px-8 py-4 bg-[var(--verde-floresta)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Ponto de encontro
                            </a>
                        </li>
                        <li>
                            <a href="/roda-de-negocios" className="px-8 py-4 bg-[var(--amarelo-ouro)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Roda de negócios
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Botão do Menu Hambúrguer (Usando SVG para garantir qualidade) */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none p-2 w-10 h-10 flex items-center justify-center rounded-md bg-white/10"
                    aria-label="Alternar Menu"
                >
                    <svg 
                        className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {/* Condicional para mudar o ícone internamente */}
                        {isOpen ? (
                            // Ícone de 'X' (fechar)
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            // Ícone de 'Hambúrguer' (abrir)
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Dropdown Mobile */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[var(--petroleo)] shadow-xl border-t border-white/10 px-8 py-6 z-[90]">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a 
                                href="/programacao" 
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-6 py-4 bg-[var(--rosa-coral)] text-white font-medium text-center shadow-md"
                            >
                                Programação
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/ponto-de-encontro" 
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-6 py-4 bg-[var(--verde-floresta)] text-white font-medium text-center shadow-md"
                            >
                                Ponto de encontro
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/roda-de-negocios" 
                                onClick={() => setIsOpen(false)}
                                className="block w-full px-6 py-4 bg-[var(--amarelo-ouro)] text-white font-medium text-center shadow-md"
                            >
                                Roda de negócios
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}