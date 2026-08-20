import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/Página 6.png";
import fundo1 from "../assets/fundoTeste4.png";

export function Header() {
    return (
        <header
            className="w-full bg-cover bg-center bg-no-repeat shadow-lg relative z-[50]"
            style={{ backgroundImage: `url('${fundo1}')` }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-6">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo1}
                        alt="Logo do Festival"
                        className="w-[100px] sm:w-[180px] md:w-[240px] h-auto object-contain block transition-all"
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;