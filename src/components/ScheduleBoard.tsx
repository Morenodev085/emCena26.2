import React, { useMemo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Building2, Calendar as CalendarIcon, Filter, ChevronDown, ChevronUp, X } from "lucide-react";
import { Piece } from "../types/peice";

interface ScheduleBoardProps {
    pieces: Piece[];
    onSelectPiece?: (piece: Piece) => void;
}

export function ScheduleBoard({ pieces, onSelectPiece }: ScheduleBoardProps) {
    // 1. Extrai e ordena todas as datas
    const dates = useMemo(() => {
        const uniqueDates = Array.from(new Set(pieces.map((p) => String(p.data || "Geral"))));
        return uniqueDates.sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
            const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
            return numA - numB;
        });
    }, [pieces]);

    // Estados
    const [selectedDate, setSelectedDate] = useState<string>(dates[0] || "");
    const [selectedType, setSelectedType] = useState<string>("Todos");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    // Mapeia categorias/tipos únicos
    const availableTypes = useMemo(() => {
        const types = Array.from(new Set(pieces.map((p) => p.type).filter(Boolean)));
        return ["Todos", ...types];
    }, [pieces]);

    // Garante data selecionada válida
    React.useEffect(() => {
        if (dates.length > 0 && !dates.includes(selectedDate)) {
            setSelectedDate(dates[0]);
        }
    }, [dates, selectedDate]);

    // Peças filtradas por Dia e por Categoria
    const filteredPieces = useMemo(() => {
        return pieces.filter((piece) => {
            const matchDate = String(piece.data || "Geral") === selectedDate;
            const matchType = selectedType === "Todos" || piece.type === selectedType;
            return matchDate && matchType;
        });
    }, [pieces, selectedDate, selectedType]);

    // Quantidade de atrações por dia
    const countByDate = useMemo(() => {
        return pieces.reduce((acc, piece) => {
            const d = String(piece.data || "Geral");
            acc[d] = (acc[d] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
    }, [pieces]);

    if (dates.length === 0) return null;

    return (
        <section className="w-full py-12 px-4 bg-[var(--marinho)] text-white">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Cabeçalho */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                        Programação Oficial
                    </h2>
                    <p className="text-[var(--bege-claro)] opacity-90 text-lg">
                        Selecione o dia e confira as atrações
                    </p>
                </div>

                {/* AREA DE NAVEGAÇÃO DE DIAS + FILTRO */}
                <div className="mb-8">
                    
                    {/* 1. CARROSSEL DE DIAS (LARGURA TOTAL / SEM OBSTÁCULOS) */}
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-2 px-1 no-scrollbar scroll-smooth w-full border-b border-white/10">
                        {dates.map((date) => {
                            const isSelected = selectedDate === date;
                            const totalPieces = countByDate[date] || 0;

                            return (
                                <button
                                    key={date}
                                    onClick={() => setSelectedDate(date)}
                                    className={`
                                        flex flex-col items-center justify-center min-w-[85px] md:min-w-[95px] py-2.5 px-3 rounded-xl transition-all duration-300 shrink-0 cursor-pointer border
                                        ${isSelected 
                                            ? "bg-[var(--rosa-coral)] text-white border-[var(--rosa-coral)] shadow-lg scale-105 font-bold" 
                                            : "bg-[var(--petroleo)]/60 text-white/80 border-white/10 hover:bg-[var(--petroleo)] hover:text-white"
                                        }
                                    `}
                                >
                                    <span className="text-[10px] uppercase tracking-wider opacity-80 flex items-center gap-1">
                                        <CalendarIcon className="w-3 h-3" /> Dia
                                    </span>
                                    <span className="text-base md:text-lg font-extrabold my-0.5">
                                        {date}
                                    </span>
                                    <span className="text-[10px] opacity-75">
                                        {totalPieces} {totalPieces === 1 ? 'atração' : 'atrações'}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. SUB-BARRA: BOTÃO DE FILTRO PEQUENO E DISCRETO (ABAIXO DA ROLAGEM) */}
                    <div className="flex items-center justify-between mt-3 px-1">
                        <span className="text-xs text-gray-400">
                            Exibindo atrações do dia <strong className="text-white">{selectedDate}</strong>
                        </span>

                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`
                                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border
                                ${selectedType !== "Todos"
                                    ? "bg-[var(--amarelo-ouro)] text-black border-[var(--amarelo-ouro)]"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
                                }
                            `}
                        >
                            <Filter className="w-3 h-3" />
                            <span>{selectedType !== "Todos" ? `Filtro: ${selectedType}` : "Filtrar por tipo"}</span>
                            {isFilterOpen ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
                        </button>
                    </div>

                    {/* 3. CAIXA EXPANSÍVEL DE FILTROS */}
                    {isFilterOpen && (
                        <div className="mt-3 p-4 bg-[var(--petroleo)]/90 border border-white/15 rounded-xl shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="flex items-center justify-between mb-2.5">
                                <span className="text-[11px] uppercase tracking-wider text-[var(--bege-claro)] font-bold opacity-80">
                                    Filtrar por Categoria:
                                </span>
                                {selectedType !== "Todos" && (
                                    <button 
                                        onClick={() => setSelectedType("Todos")}
                                        className="text-xs text-[var(--rosa-coral)] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                                    >
                                        <X className="w-3 h-3" /> Limpar
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {availableTypes.map((type) => {
                                    const isSelected = selectedType === type;
                                    return (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedType(type)}
                                            className={`
                                                px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer border
                                                ${isSelected 
                                                    ? "bg-[var(--amarelo-ouro)] text-black border-[var(--amarelo-ouro)] font-bold shadow-sm" 
                                                    : "bg-black/30 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                                                }
                                            `}
                                        >
                                            {type}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* LISTA DE CARDS */}
                {filteredPieces.length === 0 ? (
                    <div className="text-center py-16 bg-black/20 rounded-2xl border border-white/10 my-8">
                        <p className="text-lg text-gray-300">
                            Nenhuma atração da categoria <span className="font-bold text-[var(--rosa-coral)]">"{selectedType}"</span> para o dia <span className="font-bold text-[var(--rosa-coral)]">{selectedDate}</span>.
                        </p>
                        <Button 
                            onClick={() => setSelectedType("Todos")}
                            className="mt-4 bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                        >
                            Ver todas do dia
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredPieces.map((piece) => (
                            <Card 
                                key={piece.id} 
                                className="bg-black/30 border-2 border-white/10 overflow-hidden hover:border-[var(--rosa-coral)] transition-all duration-300 rounded-2xl shadow-xl p-0"
                            >
                                <CardContent className="p-0 flex flex-col md:flex-row items-stretch min-h-[260px]">
                                    
                                    {/* Imagem com corte perfeito */}
                                    <div className="w-full md:w-2/5 min-h-[240px] md:min-h-full relative overflow-hidden shrink-0 bg-black/40">
                                        {piece.image ? (
                                            <img
                                                src={piece.image}
                                                alt={piece.title || "Imagem do espetáculo"}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                Sem Imagem
                                            </div>
                                        )}
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between text-white">
                                        <div>
                                            {/* Badges */}
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                {piece.time && (
                                                    <Badge className="bg-[var(--amarelo-ouro)] text-black hover:bg-[var(--amarelo-ouro)] font-bold text-sm px-3 py-1">
                                                        <Clock className="w-4 h-4 mr-1.5 inline-block" />
                                                        {piece.time}
                                                    </Badge>
                                                )}

                                                {piece.type && (
                                                    <Badge variant="outline" className="text-white border-white/30 font-medium text-sm px-3 py-1">
                                                        {piece.type}
                                                    </Badge>
                                                )}

                                                {piece.classif && (
                                                    <Badge variant="outline" className="text-white/80 border-white/20 text-sm px-3 py-1">
                                                        Classif: {piece.classif}
                                                    </Badge>
                                                )}

                                                {piece.local && (
                                                    <span className="text-sm text-[var(--bege-claro)] flex items-center gap-1 opacity-80">
                                                        <MapPin className="w-4 h-4 text-[var(--rosa-coral)]" />
                                                        {piece.local}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Título */}
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                                                {piece.title}
                                            </h3>

                                            {/* Companhia */}
                                            {(piece.companyName || piece.city) && (
                                                <p className="text-sm text-[var(--rosa-coral)] font-medium mb-3 flex items-center gap-1.5">
                                                    <Building2 className="w-4 h-4" />
                                                    {piece.companyName && <span>{piece.companyName}</span>}
                                                    {piece.city && <span>({piece.city}{piece.uf ? ` - ${piece.uf}` : ""})</span>}
                                                </p>
                                            )}

                                            {/* Descrição */}
                                            <p className="text-gray-300 text-base leading-relaxed line-clamp-3 mb-6">
                                                {piece.description}
                                            </p>
                                        </div>

                                        {/* Botão Saiba mais */}
                                        <div className="pt-2">
                                            <Button 
                                                onClick={() => onSelectPiece?.(piece)}
                                                className="w-full md:w-auto bg-[var(--rosa-coral)] hover:bg-[var(--rosa-coral)]/90 text-white font-semibold px-8 py-5 text-base rounded-lg shadow-lg transition-all cursor-pointer"
                                            >
                                                Saiba mais
                                            </Button>
                                        </div>

                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}