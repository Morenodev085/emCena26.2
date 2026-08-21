import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pecas } from "../data/Peices";
import { PieceType } from "../types/peice";
import { Badge } from "./ui/badge";
import { Main } from "./MainContainer";
import Fundo from "../assets/Cópia de Apresentacao_Niteroi_em_Cena_Mockups.pptx (1).png";

function DescricaoComLerMais({ texto, limite = 200 }: { texto: string; limite?: number }) {
    const [expandido, setExpandido] = useState(false);

    if (!texto || texto.length <= limite) {
        return <p className="text-sm md:text-base leading-relaxed break-words">{texto}</p>;
    }

    return (
        <div className="space-y-1">
            <p className="text-sm md:text-base leading-relaxed break-words">
                {expandido ? texto : `${texto.slice(0, limite)}...`}
            </p>
            <button
                type="button"
                onClick={() => setExpandido(!expandido)}
                className="text-xs font-semibold text-[var(--amarelo-ouro)] hover:underline focus:outline-none cursor-pointer pt-1 inline-block"
            >
                {expandido ? "Ler menos" : "Ler mais"}
            </button>
        </div>
    );
}

const mapaCategorias: Record<
    string,
    { titulo: string; tipos: (PieceType | string)[]; corCard: string }
> = {
    pecas: {
        titulo: "Mostra Peças",
        tipos: ["Longa", "Pecas", "Peça", "Peças"],
        corCard: "var(--marinho)",
    },
    "cenas-curtas": {
        titulo: "Mostra Cenas Curtas",
        tipos: ["Curta", "Cenas Curtas", "Cena Curta"],
        corCard: "var(--rosa-coral)",
    },
    estudantil: {
        titulo: "Mostra Estudantil",
        tipos: ["Estudantil"],
        corCard: "var(--laranja-queimado)",
    },
    rua: {
        titulo: "Mostra Rua",
        tipos: ["Rua"],
        corCard: "var(--verde-musgo)",
    },
    rodada: {
        titulo: "Rodada de Negócios",
        tipos: ["Rodada"],
        corCard: "var(--amarelo-ouro)",
    },
    encerramentos: {
        titulo: "Encerramento e Premiação",
        tipos: ["Encerramento", "Oficinas"],
        corCard: "var(--petroleo)",
    },
    mostrapecas: {
        titulo: "Mostra Peças",
        tipos: ["Longa", "Pecas", "Peça"],
        corCard: "var(--marinho)",
    },
    mostracenascurtas: {
        titulo: "Mostra Cenas Curtas",
        tipos: ["Curta", "Cenas Curtas"],
        corCard: "var(--rosa-coral)",
    },
    mostraestudantil: {
        titulo: "Mostra Estudantil",
        tipos: ["Estudantil"],
        corCard: "var(--laranja-queimado)",
    },
    mostrarua: {
        titulo: "Mostra Rua",
        tipos: ["Rua"],
        corCard: "var(--verde-musgo)",
    },
    mostraencerramentos: {
        titulo: "Encerramento e Premiação",
        tipos: ["Encerramento"],
        corCard: "var(--petroleo)",
    },
};

export function PaginaMostra() {
    const { tipo: categoria } = useParams<{ tipo: string }>();

    const chaveNormalizada = categoria ? categoria.toLowerCase().replace(/[^a-z0-9-]/g, "") : "";
    const config = mapaCategorias[chaveNormalizada] || (categoria ? mapaCategorias[categoria] : null);

    const itensFiltrados = config
        ? pecas.filter((item) =>
            config.tipos.some(
                (t) => String(t).toLowerCase() === String(item.type).toLowerCase()
            )
        )
        : [];

    const tituloPagina = config?.titulo || "Mostra";
    const corCardPagina = config?.corCard || "var(--petroleo)";

    return (
        <Main>
            <section
                className="w-full min-h-screen pt-4 pb-10 px-4 bg-cover bg-top bg-no-repeat bg-fixed relative -mt-1"
                style={{ backgroundImage: `url("${Fundo}")` }}
            >
                {/* Camada opcional de opacidade/contraste */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-start relative z-10">
                    <h1 className="text-3xl font-bold mb-6 text-[var(--bege-claro)] border-b border-white/20 pb-2 text-center w-full">
                        {tituloPagina}
                    </h1>

                    {itensFiltrados.length === 0 ? (
                        <p className="text-slate-200 italic text-center py-8 bg-black/40 px-6 rounded-lg backdrop-blur-sm">
                            Nenhuma atração cadastrada para esta categoria.
                        </p>
                    ) : (
                        <div className="w-full space-y-6">
                            {itensFiltrados.map((item) => (
                                <article
                                    key={item.id}
                                    className="border border-white/10 rounded-lg p-6 text-[var(--bege-claro)] shadow-xl flex flex-col gap-4 backdrop-blur-sm"
                                    style={{ backgroundColor: corCardPagina }}
                                >
                                    {/* Cabeçalho do Card */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2 pb-4 border-b border-white/20">
                                        <div>
                                            <h2 className="text-2xl font-bold block text-[var(--bege-claro)]">{item.title}</h2>
                                            {item.companyName && (
                                                <span className="text-sm text-slate-200">
                                                    {item.companyName} {item.city && `• ${item.city}/${item.uf}`}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 text-lg">
                                            <Badge
                                                variant="outline"
                                                className="text-[var(--amarelo-ouro)] border-[var(--amarelo-ouro)] text-lg py-1 px-3 bg-black/20"
                                            >
                                                {item.data} - {item.time}h
                                            </Badge>
                                            <Badge className="bg-[var(--verde-floresta)] text-white text-lg py-1 px-3">
                                                Local: {item.local}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Imagem Inteira */}
                                    {item.image && (
                                        <div className="w-full my-2 flex justify-center items-center bg-black/30 rounded-lg p-2">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto max-h-[500px] object-contain rounded-md"
                                            />
                                        </div>
                                    )}

                                    {/* Descrição com Ler mais */}
                                    <div>
                                        <h3 className="font-semibold text-[var(--amarelo-ouro)] mb-1">Descrição</h3>
                                        <DescricaoComLerMais texto={item.description} limite={200} />
                                    </div>

                                    {/* Rodapé com detalhes adicionais */}
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-200 pt-3 border-t border-white/20">
                                        {item.classif && (
                                            <span>
                                                <strong>Classificação:</strong> {item.classif}
                                            </span>
                                        )}
                                        {item.duration && (
                                            <span>
                                                <strong>Duração:</strong> {item.duration}
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Main>
    );
}