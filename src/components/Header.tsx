import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/LOGO1.png";
import { FaixaDecorativa } from "./FaixaDecorativa";
import template from "../assets/BgCenasCurtas.png";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mostrasDropdown, setMostrasDropdown] = useState(false);

    // Adicionamos a propriedade 'bgClass' com a cor de cada item
    const mostrasList = [
        { title: "Mostra peças", href: "/mostra/pecas", bgClass: "bg-[var(--marinho)]" },
        { title: "Mostra cenas curtas", href: "/mostra/cenas-curtas", bgClass: "bg-[var(--rosa-coral)]" },
        { title: "Mostra estudantil", href: "/mostra/estudantil", bgClass: "bg-[var(--laranja-queimado)]" },
        { title: "Mostra rua", href: "/mostra/rua", bgClass: "bg-[var(--verde-musgo)]" },
    ];

    return (
        <header className="w-full bg-[var(--petroleo)] shadow-lg relative z-[100]">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-6 px-8 py-6">

                {/* Logo */}
                <div className="flex items-center justify-start my-4">
                    <Link to="/">
                        <img src={logo1} alt="Logo do Festival" className="w-[260px] md:w-[300px] h-auto object-contain block" />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:block w-auto">
                    <ul className="flex flex-row items-center gap-4">
                        <li>
                            <Link to="/Programacao" className="px-8 py-4 bg-[var(--rosa-coral)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Programação
                            </Link>
                        </li>

                        {/* Dropdown Mostras (Desktop) */}
                        <li
                            className="relative"
                            onMouseEnter={() => setMostrasDropdown(true)}
                            onMouseLeave={() => setMostrasDropdown(false)}
                        >
                            <button
                                className="px-8 py-4 bg-[var(--verde-musgo)] text-white font-medium flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                Mostras
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mostrasDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Submenu Desktop com Cores Diferentes */}
                            {mostrasDropdown && (
                                <ul className="absolute top-full left-0 w-64 shadow-xl border-t border-white/10 flex flex-col z-50 overflow-hidden py-1 bg-[var(--petroleo)] gap-1">
                                    {mostrasList.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                to={item.href}
                                                className={`block px-6 py-3 text-white font-medium transition-colors ${item.bgClass}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            
                        </li>

                        <li>
                            <Link to="/RodaDeNegocios" className="px-8 py-4 bg-[var(--amarelo-ouro)] text-white font-medium inline-block text-center shadow-md hover:opacity-90 transition-opacity">
                                Roda de negócios
                            </Link>
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

            {/* DROPDOWN MOBILE */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[var(--petroleo)] shadow-2xl border-t border-white/10 px-6 py-6 z-[90]">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link 
                                to="/Programacao" 
                                onClick={() => setIsOpen(false)} 
                                className="block w-full py-4 bg-[var(--rosa-coral)] text-white font-medium text-center shadow-md rounded-md hover:opacity-90 transition-opacity"
                            >
                                Programação
                            </Link>
                        </li>

                        <li className="flex flex-col gap-2">
                            <button
                                onClick={() => setMostrasDropdown(!mostrasDropdown)}
                                className="w-full py-4 bg-[var(--verde-musgo)] text-white font-medium flex items-center justify-center gap-2 shadow-md rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                Mostras
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mostrasDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Submenu Mobile com Cores Diferentes */}
                            {mostrasDropdown && (
                                <ul className="flex flex-col gap-2 pt-1 pl-2">
                                    {mostrasList.map((item) => (
                                        <li key={item.title}>
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block w-full py-3 text-white text-center font-medium shadow-sm transition-colors rounded-md ${item.bgClass}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link 
                                to="/RodaDeNegocios" 
                                onClick={() => setIsOpen(false)} 
                                className="block w-full py-4 bg-[var(--amarelo-ouro)] text-white font-medium text-center shadow-md rounded-md hover:opacity-90 transition-opacity"
                            >
                                Roda de negócios
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <FaixaDecorativa imagem={template} />
        </header>
    );
}

export default Header;