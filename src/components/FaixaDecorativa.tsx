import React from "react";

interface FaixaDecorativaProps {
    imagem: string;      // URL ou import da imagem de fundo
    altura?: string;     // Opções como 'h-6', 'h-4', etc. (Opcional, padrão 'h-6')
    className?: string;  // Para passar classes Tailwind adicionais se precisar
}

export function FaixaDecorativa({ imagem, altura = "h-6", className = "" }: FaixaDecorativaProps) {
    return (
        <div
            className={`w-full ${altura} bg-repeat-x bg-center ${className}`}
            style={{
                backgroundImage: `url(${imagem})`,
                backgroundSize: "contain"
            }}
        />
    );
}