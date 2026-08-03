import { Button } from "../components/ui/button"; // Botão do Shadcn UI

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    buttonText?: string;
    onButtonClick?: () => void;
    reverse?: boolean;
    
    /* OPÇÕES DE BACKGROUND */
    bgType?: "image" | "color" | "gradient"; // Tipo de fundo
    bgValue?: string; // Caminho da imagem, código Hex/CSS (#fff, var(--petroleo)) ou classe de gradiente
    overlay?: boolean; // Liga/desliga a camada escura sobre a imagem de fundo
    textColor?: string; // Permite forçar uma cor de texto diferente (ex: "text-gray-900" para fundos claros)
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
    overlay = true,
    textColor = "text-white"
}: FeatureSectionProps) {

    // Lógica para aplicar o estilo de fundo dinamicamente
    const getBackgroundStyle = () => {
        if (bgType === "image") {
            return { backgroundImage: `url(${bgValue})` };
        }
        if (bgType === "color") {
            return { backgroundColor: bgValue.startsWith("var") ? bgValue : bgValue };
        }
        return {};
    };

    return (
        <section 
            className={`relative py-16 px-8 bg-cover bg-center overflow-hidden transition-all
                ${bgType === "gradient" ? bgValue : ""} 
                ${textColor}`}
            style={getBackgroundStyle()}
        >
            {/* Overlay escuro opcional para quando o fundo for imagem */}
            {bgType === "image" && overlay && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-0" />
            )}

            <div 
                className={`relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 
                ${reverse ? "md:flex-row-reverse" : ""}`}
            >
                {/* Lado do Texto */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {title}
                    </h2>
                    
                    <p className="text-lg opacity-90 leading-relaxed">
                        {description}
                    </p>

                    {/* Botão Shadcn */}
                    <Button 
                        onClick={onButtonClick}
                        className="bg-[var(--cinza-escuro)] hover:bg-[var(--rosa-coral)]/90 text-white font-medium px-8 py-6 text-lg rounded-md shadow-lg transition-all cursor-pointer border-2 border-white/20 hover:scale-105 active:scale-95"
                    >
                        {buttonText}
                    </Button>
                </div>

                {/* Lado da Imagem em Destaque */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl border-2 border-white/10"
                    />
                </div>
            </div>
        </section>
    );
}