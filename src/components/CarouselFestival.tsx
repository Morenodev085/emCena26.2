import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Piece } from "../types/peice";

interface CarouselFestivalProps {
    title: string;
    pieces: Piece[];
}

export function FestivalCarousel({ title, pieces }: CarouselFestivalProps) {
    const piecesWithImage = pieces.filter((piece) => piece.image);

    if (piecesWithImage.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-1 md:py-4 px-0 md:px-4">
            <div className="w-full md:w-[90%] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative group"
                >
                    <CarouselContent className="ml-0">
                        {piecesWithImage.map((piece) => (
                            <CarouselItem 
                                key={piece.id} 
                                className="pl-0 basis-full"
                            >
                                <div className="w-full">
                                    {/* Altura mobile reduzida de 75vh para 60vh para diminuir o teto/chão vazios */}
                                    <div className="relative w-full h-[60vh] md:h-[650px] overflow-hidden rounded-none md:rounded-lg shadow-md bg-black flex items-center justify-center">
                                        
                                        {/* Fundo Desfocado: Opacidade e escala reduzidas para não gritar na tela */}
                                        <img
                                            src={piece.image}
                                            alt=""
                                            aria-hidden="true"
                                            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-105 opacity-30 pointer-events-none"
                                        />

                                        {/* Overlay Escuro: Aumentado para bg-black/60 para apagar mais o fundo */}
                                        <div className="absolute inset-0 bg-black/60" />

                                        {/* Imagem Principal */}
                                        <img
                                            src={piece.image}
                                            alt={piece.title || "Foto do espetáculo"}
                                            className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                                            loading="lazy"
                                        />

                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselPrevious className="left-3 z-20 bg-black/50 hover:bg-black/80 text-white border-none w-8 h-8 md:w-10 md:h-10" />
                    <CarouselNext className="right-3 z-20 bg-black/50 hover:bg-black/80 text-white border-none w-8 h-8 md:w-10 md:h-10" />
                </Carousel>
            </div>
        </section>
    );
}