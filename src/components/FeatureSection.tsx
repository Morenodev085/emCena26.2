import React from "react";
import { Button } from "../components/ui/button";

interface FeatureSectionProps {
    /* TÍTULO EM TEXTO AGORA É OPCIONAL */
    title?: string;
    description: string;
    
    /* IMAGEM DO TÍTULO (OPCIONAL) */
    titleImageSrc?: string;
    
    imageSrc?: string;
    showImage?: boolean;
    
    /* BOTÃO OPCIONAL */
    buttonText?: string;
    showButton?: boolean;
    onButtonClick?: () => void;
    
    reverse?: boolean;

    /* SOMBRAS E BORDAS OPCIONAIS */
    hasImageShadow?: boolean;
    hasImageBorder?: boolean;
    hasButtonShadow?: boolean;

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
    titleImageSrc,
    imageSrc,
    showImage = true,
    buttonText,
    showButton = true,
    onButtonClick,
    reverse = false,
    hasImageShadow = true,
    hasImageBorder = true,
    hasButtonShadow = true,
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

    const hasImage = showImage && typeof imageSrc === "string" && imageSrc.trim() !== "";
    
    const shouldRenderButton = showButton && typeof buttonText === "string" && buttonText.trim() !== "";
    
    const hasTitleImage = typeof titleImageSrc === "string" && titleImageSrc.trim() !== "";
    const hasTitleText = typeof title === "string" && title.trim() !== "";

    return (
        <section
            className={`relative py-4 md:py-8 px-4 md:px-8 bg-center overflow-hidden transition-all
                ${bgType === "gradient" ? bgValue : ""} 
                ${textColor}`}
            style={getBackgroundStyle()}
        >
            {bgType === "image" && overlay && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] z-0" />
            )}

            <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
                <div
                    className={`w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 md:p-6 rounded-2xl shadow-2xl backdrop-blur-sm
                    ${!isCustomStyleColor ? cardBgColor : ""} 
                    ${reverse && hasImage ? "md:flex-row-reverse" : ""}`}
                    style={isCustomStyleColor ? { backgroundColor: cardBgColor } : {}}
                >
                    {/* TEXTO E BOTÃO */}
                    <div
                        className={`w-full ${
                            hasImage ? "md:w-3/5 md:items-start md:text-left" : "w-full text-center items-center"
                        } flex flex-col items-center gap-3 justify-center`}
                    >
                        {/* RENDERIZA LOGO/IMAGEM DE TÍTULO OU TEXTO (SE EXISTIREM) */}
                        {(hasTitleImage || hasTitleText) && (
                            <h2 className="w-full flex justify-center md:justify-start">
                                {hasTitleImage ? (
                                    <img
                                        src={titleImageSrc}
                                        alt={title || "Título da Seção"}
                                        className="max-h-12 md:max-h-16 w-auto object-contain"
                                    />
                                ) : (
                                    <span className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">
                                        {title}
                                    </span>
                                )}
                            </h2>
                        )}

                        <p className="text-sm md:text-base text-gray-800 leading-normal">
                            {description}
                        </p>

                        {shouldRenderButton && (
                            <Button
                                onClick={onButtonClick}
                                className={`bg-[var(--petroleo)] hover:opacity-90 text-white font-medium px-6 py-2 text-sm rounded-md transition-all cursor-pointer hover:scale-105 active:scale-95 
                                    ${hasButtonShadow ? "shadow-md" : "shadow-none"}`}
                            >
                                {buttonText}
                            </Button>
                        )}
                    </div>

                    {/* IMAGEM PRINCIPAL */}
                    {hasImage && (
                        <div className="w-full md:w-2/5 flex justify-center items-center">
                            <img
                                src={imageSrc}
                                alt={title || "Imagem da seção"}
                                className={`w-full h-auto max-h-48 md:max-h-60 object-contain md:object-cover rounded-xl 
                                    ${hasImageShadow ? "shadow-md" : "shadow-none"} 
                                    ${hasImageBorder ? "border border-black/10" : "border-none"}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;