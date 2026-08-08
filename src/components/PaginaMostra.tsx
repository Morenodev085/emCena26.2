import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pecas } from "../data/Peices";
import { PieceType } from "../types/peice";
import { Badge } from "./ui/badge";
import { Main } from "./MainContainer";

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

const mapaCategorias: Record<string, { titulo: string; tipos: (PieceType | string)[] }> = {
    pecas: {
        titulo: "Mostra Peças (Longas)",
        tipos: ["Longa", "Pecas", "Peça", "Peças"],
    },
    "cenas-curtas": {
        titulo: "Mostra Cenas Curtas",
        tipos: ["Curta", "Cenas Curtas", "Cena Curta"],
    },
    estudantil: {
        titulo: "Mostra Estudantil",
        tipos: ["Estudantil"],
    },
    rua: {
        titulo: "Mostra Rua",
        tipos: ["Rua"],
    },
    rodada: {
        titulo: "Rodada de Negócios",
        tipos: ["Rodada"],
    },
    encerramentos: {
        titulo: "Encerramento e Premiação",
        tipos: ["Encerramento", "Oficinas"],
    },
    mostrapecas: {
        titulo: "Mostra Peças",
        tipos: ["Longa", "Pecas", "Peça"],
    },
    mostracenascurtas: {
        titulo: "Mostra Cenas Curtas",
        tipos: ["Curta", "Cenas Curtas"],
    },
    mostraestudantil: {
        titulo: "Mostra Estudantil",
        tipos: ["Estudantil"],
    },
    mostrarua: {
        titulo: "Mostra Rua",
        tipos: ["Rua"],
    },
    mostraencerramentos: {
        titulo: "Encerramento e Premiação",
        tipos: ["Encerramento"],
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

    return (
        <Main>
            <section className="w-full max-w-5xl mx-auto py-10 px-4 min-h-[60vh] flex flex-col items-center justify-start">
                <div className="w-full">
                    <h1 className="text-3xl font-bold mb-6 text-[var(--bege-claro)] border-b border-slate-700 pb-2 text-center">
                        {tituloPagina}
                    </h1>

                    {itensFiltrados.length === 0 ? (
                        <p className="text-slate-400 italic text-center py-8">
                            Nenhuma atração cadastrada para esta categoria.
                        </p>
                    ) : (
                        <div className="w-full space-y-6">
                            {itensFiltrados.map((item) => (
                                <article
                                    key={item.id}
                                    className="border border-slate-700 rounded-lg p-6 bg-[var(--petroleo)] text-[var(--bege-claro)] shadow-md flex flex-col gap-4"
                                >
                                    {/* Cabeçalho do Card */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2 pb-4 border-b border-slate-600/50">
                                        <div>
                                            <h2 className="text-2xl font-bold block text-[var(--bege-claro)]">{item.title}</h2>
                                            {item.companyName && (
                                                <span className="text-sm text-slate-300">
                                                    {item.companyName} {item.city && `• ${item.city}/${item.uf}`}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Badge
                                                variant="outline"
                                                className="text-[var(--amarelo-ouro)] border-[var(--amarelo-ouro)] text-sm py-1 px-3"
                                            >
                                                {item.data} - {item.time}h
                                            </Badge>
                                            <Badge className="bg-[var(--verde-floresta)] text-white text-sm py-1 px-3">
                                                {item.local}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Imagem Inteira */}
                                    {item.image && (
                                        <div className="w-full my-2 flex justify-center items-center bg-black/20 rounded-lg p-2">
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
                                    <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-3 border-t border-slate-700/50">
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