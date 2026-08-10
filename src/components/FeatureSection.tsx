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

    /* BACKGROUND DO CARD DE TEXTO */
    cardBgColor?: string;
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
    cardBgColor = "bg-[#F7EBE1]"
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

    const isCustomStyleColor =
        cardBgColor.startsWith("#") ||
        cardBgColor.startsWith("rgb") ||
        cardBgColor.startsWith("var");

    const hasImage = typeof imageSrc === "string" && imageSrc.trim() !== "";

    return (
        <section
            className={`relative py-12 md:py-20 px-4 md:px-8 bg-center overflow-hidden transition-all
                ${bgType === "gradient" ? bgValue : ""} 
                ${textColor}`}
            style={getBackgroundStyle()}
        >
            {bgType === "image" && overlay && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />
            )}

            <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
                {/* CONTAINER CARD PRINCIPAL */}
                <div
                    className={`w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl shadow-2xl backdrop-blur-sm
                    ${!isCustomStyleColor ? cardBgColor : ""} 
                    ${reverse && hasImage ? "md:flex-row-reverse" : ""}`}
                    style={isCustomStyleColor ? { backgroundColor: cardBgColor } : {}}
                >
                    {/* LADO ESQUERDO: TEXTO E BOTÃO */}
                    <div
                        className={`w-full ${
                            hasImage ? "md:w-3/5" : "w-full text-center"
                        } flex flex-col items-center ${
                            hasImage ? "md:items-start md:text-left" : "items-center"
                        } gap-6`}
                    >
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
                            {title}
                        </h2>

                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            {description}
                        </p>

                        <Button
                            onClick={onButtonClick}
                            className="bg-[var(--petroleo)] hover:opacity-90 text-white font-medium px-8 py-6 text-base rounded-md shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                        >
                            {buttonText}
                        </Button>
                    </div>

                    {/* LADO DIREITO: IMAGEM/BANNER */}
                    {hasImage && (
                        <div className="w-full md:w-2/5 flex justify-center items-center">
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full max-h-80 object-cover rounded-xl shadow-md border border-black/10"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;