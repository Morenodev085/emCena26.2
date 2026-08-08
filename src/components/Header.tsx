import React, { useState } from "react";
import logo1 from "../assets/LOGO1.png"; 

// Imagens de fundo das mostras
import bgPecas from "../assets/BGpecas.png";
import bgCenasCurtas from "../assets/BgCenasCurtas.png";
import bgEstudantil from "../assets/BgEstudantil.png";
import bgRua from "../assets/BgLogoV.png";
import bgOficina from "../assets/BgOficinas.png";


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mostrasDropdown, setMostrasDropdown] = useState(false);

    // Lista das opções dentro do dropdown de Mostras (incluindo Oficinas)
    const mostrasList = [
        { title: "Mostra peças", href: "/MostraPecas", bg: bgPecas },
        { title: "Mostra cenas curtas", href: "/MostraCenasCurtas", bg: bgCenasCurtas },
        { title: "Mostra estudantil", href: "/MostraEstudantil", bg: bgEstudantil },
        { title: "Mostra rua", href: "/MostraRua", bg: bgRua },
        { title: "Oficinas", href: "/Oficinas", bg: bgOficina }, // Adicionado dentro do menu Mostras
    ];

    return (
        <header className="w-full bg-[var(--petroleo)] px-8 py-6 shadow-lg relative z-[100]">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-6">
                
                {/* Logo */}
                <div className="flex items-center justify-start my-4">
                    <a href="/">
                        <img src={logo1} alt="Logo do Festival" className="w-[260px] md:w-[300px] h-auto object-contain block" />
                    </a>
                </div>
                
                {/* Menu Desktop */}
                <nav className="hidden md:block w-auto">
                    <ul className="flex flex-row items-center gap-4">
                        <li>
                            <a href="/Programacao" className="px-8 py-4 bg-[var(--rosa-coral)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Programação
                            </a>
                        </li>

                        {/* Dropdown Mostras (Desktop) */}
                        <li 
                            className="relative"
                            onMouseEnter={() => setMostrasDropdown(true)}
                            onMouseLeave={() => setMostrasDropdown(false)}
                        >
                            <button 
                                className="px-8 py-4 bg-[var(--verde-floresta)] text-white font-medium flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                Mostras
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mostrasDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {mostrasDropdown && (
                                <ul className="absolute top-full left-0 w-64 bg-[var(--verde-floresta)] shadow-xl border-t border-white/10 flex flex-col z-50 overflow-hidden">
                                    {mostrasList.map((item) => (
                                        <li key={item.title} className="relative group">
                                            <a 
                                                href={item.href} 
                                                className="relative block px-6 py-4 text-white font-medium bg-cover bg-center overflow-hidden transition-all duration-300"
                                                style={{ backgroundImage: `url(${item.bg})` }}
                                            >
                                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-0" />
                                                <span className="relative z-10">{item.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <a href="/RodaDeNegocios" className="px-8 py-4 bg-[var(--amarelo-ouro)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Roda de negócios
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Botão Hambúrguer Mobile */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none p-2 w-10 h-10 flex items-center justify-center rounded-md bg-white/10"
                    aria-label="Alternar Menu"
                >
                    <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
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
                            <a href="/Programacao" onClick={() => setIsOpen(false)} className="block w-full px-6 py-4 bg-[var(--rosa-coral)] text-white font-medium text-center shadow-md">
                                Programação
                            </a>
                        </li>

                        {/* Dropdown Mobile - Mostras */}
                        <li className="flex flex-col">
                            <button 
                                onClick={() => setMostrasDropdown(!mostrasDropdown)}
                                className="w-full px-6 py-4 bg-[var(--verde-floresta)] text-white font-medium flex items-center justify-center gap-2 shadow-md"
                            >
                                Mostras
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mostrasDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {mostrasDropdown && (
                                <ul className="flex flex-col border-t border-white/10">
                                    {mostrasList.map((item) => (
                                        <li key={item.title} className="relative group">
                                            <a 
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="relative block px-6 py-4 text-white text-center font-medium bg-cover bg-center overflow-hidden"
                                                style={{ backgroundImage: `url(${item.bg})` }}
                                            >
                                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-0" />
                                                <span className="relative z-10">{item.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <a href="/RodaDeNegocios" onClick={() => setIsOpen(false)} className="block w-full px-6 py-4 bg-[var(--amarelo-ouro)] text-white font-medium text-center shadow-md">
                                Roda de negócios
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;