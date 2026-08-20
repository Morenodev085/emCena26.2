import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import template from "../assets/Cópia de Apresentacao_Niteroi_em_Cena_Mockups.pptx (1).png";

export function NavigationSection() {
    const navItems = [
        { title: "PROGRAMAÇÃO", href: "/#Programacao", bgClass: "bg-[var(--rosa-coral)]", isHashLink: true },
        { title: "MOSTRA PEÇAS", href: "/mostra/pecas", bgClass: "bg-[var(--marinho)]" },
        { title: "MOSTRA CENAS CURTAS", href: "/mostra/cenas-curtas", bgClass: "bg-[var(--rosa-coral)]" },
        { title: "MOSTRA ESTUDANTIL", href: "/mostra/estudantil", bgClass: "bg-[var(--laranja-queimado)]" },
        { title: "MOSTRA RUA", href: "/mostra/rua", bgClass: "bg-[var(--verde-musgo)]" },
        { title: "RODADA DE NEGÓCIOS", href: "/RodaDeNegocios", bgClass: "bg-[var(--amarelo-ouro)]" },
    ];

    const sectionStyle = {
        backgroundImage: `url('${template}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    const commonClasses = 
        "flex-1 min-h-[54px] px-3 py-3 text-white text-xs sm:text-sm font-semibold text-center uppercase shadow-md rounded-md transition-all hover:scale-105 flex items-center justify-center leading-tight";

    return (
        <section 
            className="w-full py-8 px-4 relative z-[40]"
            style={sectionStyle}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 items-stretch justify-center">
                {navItems.map((item) => (
                    item.isHashLink ? (
                        <NavHashLink
                            key={item.title}
                            smooth
                            to={item.href}
                            className={`${commonClasses} ${item.bgClass}`}
                        >
                            {item.title}
                        </NavHashLink>
                    ) : (
                        <Link
                            key={item.title}
                            to={item.href}
                            className={`${commonClasses} ${item.bgClass}`}
                        >
                            {item.title}
                        </Link>
                    )
                ))}
            </div>
        </section>
    );
}

export default NavigationSection;