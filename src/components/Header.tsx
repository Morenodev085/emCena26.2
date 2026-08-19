import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo1 from "../assets/Página 6.png";
import template from "../assets/templates.png";
import fundo1 from "../assets/fundoTeste4.png"; // Nome simplificado

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mostrasDropdown, setMostrasDropdown] = useState(false);

    const mostrasList = [
        { title: "MOSTRA PEÇAS", href: "/mostra/pecas", bgClass: "bg-[var(--marinho)]" },
        { title: "MOSTRA CENAS CURTAS", href: "/mostra/cenas-curtas", bgClass: "bg-[var(--rosa-coral)]" },
        { title: "MOSTRA ESTUDANTIL", href: "/mostra/estudantil", bgClass: "bg-[var(--laranja-queimado)]" },
        { title: "MOSTRA RUA", href: "/mostra/rua", bgClass: "bg-[var(--verde-musgo)]" },
    ];

    return (
        <header
            className="w-full bg-cover bg-center bg-no-repeat shadow-lg relative z-[100]"
            style={{ backgroundImage: `url('${fundo1}')` }}
        >
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-6 px-2 py-6">

                {/* Logo */}
                <div className="flex items-center justify-start my-4">
                    <Link to="/">
                        <img
                            src={logo1}
                            alt="Logo do Festival"
                            className="w-[100px] sm:w-[180px] md:w-[240px] h-auto object-contain block transition-all"
                        />
                    </Link>
                </div>


                {/* Botão Hambúrguer Mobile */}
                <button
                    type="button"
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
                            <NavHashLink
                                smooth
                                to="/#Programacao"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-4 bg-[var(--rosa-coral)] text-white font-medium text-center shadow-md rounded-md hover:opacity-90 transition-opacity"
                            >
                                PROGRAMAÇÃO
                            </NavHashLink>
                        </li>

                        <li className="flex flex-col gap-2">
                            <button
                                type="button"
                                onClick={() => setMostrasDropdown(!mostrasDropdown)}
                                className="w-full py-4 bg-[var(--verde-musgo)] text-white font-medium flex items-center justify-center gap-2 shadow-md rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                            >
                                Mostras
                                <svg className={`w-4 h-4 transition-transform duration-200 ${mostrasDropdown ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Submenu Mobile */}
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
                                RODADA DE NEGÓCIOS
                            </Link>
                        </li>
                    </ul>
                </div>
            )}


        </header>
    );
}

export default Header;