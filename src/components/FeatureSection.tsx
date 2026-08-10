import React from "react";
import { Button } from "../components/ui/button";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    reverse?: boolean;

    /* OPÇÕES DE BACKGROUND DA SEÇÃO */
    bgType?: "image" | "color" | "gradient";
    bgValue?: string;
    bgRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "space" | "round";
    bgSize?: string;
    overlay?: boolean;
    textColor?: string;

    /* NOVA OPÇÃO: BACKGROUND DO CARD DE TEXTO */
    cardBgColor?: string; // Aceita qualquer cor/variável CSS (Ex: "bg-[var(--rosa-coral)]" ou "bg-black/50" ou "#121212")
}

export function FeatureSection({
    title,
    description,
    imageSrc,
    buttonText = "Saiba mais",
    onButtonClick,
    reverse = false,
    bgType = "color",
    bgValue = "var(--petroleo)",
    bgRepeat = "repeat",
    bgSize = "auto",
    overlay = true,
    textColor = "text-white",
    cardBgColor = "bg-[var(--verde-floresta)]" // Cor sólida padrão do card de texto
}: FeatureSectionProps) {

    const getBackgroundStyle = (): React.CSSProperties => {
        if (bgType === "image") {
            return {
                backgroundImage: `url(${bgValue})`,
                backgroundRepeat: bgRepeat,
                backgroundSize: bgSize
            };
        }
        if (bgType === "color") {
            return { backgroundColor: bgValue };
        }
        return {};
    };

    // Suporta tanto classes Tailwind quanto cores hex/rgb no estilo inline
    const isCustomStyleColor = cardBgColor.startsWith("#") || cardBgColor.startsWith("rgb") || cardBgColor.startsWith("var");

    return (
        <section
            className={`relative py-8 px-8 bg-center overflow-hidden transition-all
                ${bgType === "gradient" ? bgValue : ""} 
                ${textColor}`}
            style={getBackgroundStyle()}
        >
            {bgType === "image" && overlay && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0" />
            )}

            <div
                className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 
                ${reverse && imageSrc ? "md:flex-row-reverse" : ""}`}
            >
                {/* CARD DO TEXTO: Quadro com a cor de fundo escolhida */}
                <div 
                    className={`w-full ${imageSrc ? "md:w-1/2" : "max-w-3xl mx-auto"} 
                    flex flex-col items-center ${imageSrc ? "md:items-start md:text-left" : "text-center"} 
                    gap-6 text-center p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm
                    ${!isCustomStyleColor ? cardBgColor : ""}`}
                    style={isCustomStyleColor ? { backgroundColor: cardBgColor } : {}}
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {title}
                    </h2>

                    <p className="text-lg opacity-90 leading-relaxed">
                        {description}
                    </p>

                    <Button
                        onClick={onButtonClick}
                        className="bg-[var(--cinza-escuro)] hover:bg-[var(--rosa-coral)]/90 text-white font-medium px-8 py-6 text-lg rounded-md shadow-lg transition-all cursor-pointer border-2 border-white/20 hover:scale-105 active:scale-95"
                    >
                        {buttonText}
                    </Button>

                {/* Imagem do lado */}
                {typeof imageSrc === "string" && imageSrc.trim() !== "" && (
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl border-2 border-white/10"
                            />
                    </div>
                )}
            </div>
                </div>
        </section>
    );
}

export default FeatureSection;