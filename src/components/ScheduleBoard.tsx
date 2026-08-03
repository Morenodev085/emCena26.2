import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Building2 } from "lucide-react";
import { Piece } from "../types/peice";

interface ScheduleBoardProps {
    pieces: Piece[];
    onSelectPiece?: (piece: Piece) => void;
}

export function ScheduleBoard({ pieces, onSelectPiece }: ScheduleBoardProps) {
    // 1. Agrupa as peças por data
    const groupedByDate = useMemo(() => {
        if (!pieces || pieces.length === 0) return {};

        return pieces.reduce((acc, piece) => {
            const dateKey = piece.data ? String(piece.data) : "Programação Geral";
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(piece);
            return acc;
        }, {} as Record<string, Piece[]>);
    }, [pieces]);

    // 2. Extrai e ordena as datas cronologicamente (ex: 11/09, 12/09...)
    const dates = useMemo(() => {
        return Object.keys(groupedByDate).sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
            const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
            return numA - numB;
        });
    }, [groupedByDate]);

    if (dates.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-12 px-4 bg-[var(--marinho)] text-white">
            <div className="max-w-7xl mx-auto w-full">
                
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                        Programação Oficial
                    </h2>
                    <p className="text-[var(--bege-claro)] opacity-90 text-lg">
                        Selecione o dia e confira os horários de cada atração
                    </p>
                </div>

                {/* Tabs dos Dias do Festival */}
                <Tabs defaultValue={dates[0]} className="w-full">
                    
                    {/* Botões dos Dias */}
                    <TabsList className="w-full flex justify-center bg-[var(--petroleo)] p-1.5 rounded-xl mb-8 border border-white/10 h-auto flex-wrap gap-2">
                        {dates.map((date) => (
                            <TabsTrigger
                                key={date}
                                value={date}
                                className="px-6 py-3 text-base md:text-lg font-semibold rounded-lg data-[state=active]:bg-[var(--rosa-coral)] data-[state=active]:text-white transition-all cursor-pointer"
                            >
                                {date}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Lista das Peças por Dia */}
                    {dates.map((date) => (
                        <TabsContent key={date} value={date} className="space-y-6">
                            {groupedByDate[date].map((piece) => (
                                <Card 
                                    key={piece.id} 
                                    className="bg-black/30 border-2 border-white/10 overflow-hidden hover:border-[var(--rosa-coral)] transition-all duration-300 rounded-2xl shadow-xl p-0"
                                >
                                    <CardContent className="p-0 flex flex-col md:flex-row items-stretch min-h-[260px]">
                                        
                                        {/* Container da Imagem sangrando nas bordas */}
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

                                        {/* Informações da Peça e Botão */}
                                        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between text-white">
                                            <div>
                                                {/* Badges e Meta Informações */}
                                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                                    {/* Horário */}
                                                    {piece.time && (
                                                        <Badge className="bg-[var(--amarelo-ouro)] text-black hover:bg-[var(--amarelo-ouro)] font-bold text-sm px-3 py-1">
                                                            <Clock className="w-4 h-4 mr-1.5 inline-block" />
                                                            {piece.time}
                                                        </Badge>
                                                    )}

                                                    {/* Categoria/Tipo */}
                                                    {piece.type && (
                                                        <Badge variant="outline" className="text-white border-white/30 font-medium text-sm px-3 py-1">
                                                            {piece.type}
                                                        </Badge>
                                                    )}

                                                    {/* Classificação Indicativa */}
                                                    {piece.classif && (
                                                        <Badge variant="outline" className="text-white/80 border-white/20 text-sm px-3 py-1">
                                                            Classif: {piece.classif}
                                                        </Badge>
                                                    )}

                                                    {/* Localização */}
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

                                                {/* Companhia e Origem */}
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

                                            {/* Botão de Ação */}
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
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}