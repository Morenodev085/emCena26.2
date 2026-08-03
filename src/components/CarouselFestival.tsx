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
        <section className="w-full py-6 px-4">
            {/* CONTAINER COM LARGURA MÁXIMA CENTRALIZADO */}
            <div className="max-w-7xl mx-auto w-full">
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
                                    {/* ALTURA CONTROLADA: 50vh no mobile e 550px fixos em telas médias/grandes */}
                                    <div className="w-full h-[50vh] md:h-[550px] overflow-hidden rounded-2xl shadow-xl border border-[var(--petroleo)] bg-black">
                                        <img
                                            src={piece.image}
                                            alt={piece.title || "Foto do espetáculo"}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Botões posicionados com respiro nas pontas */}
                    <CarouselPrevious className="left-4 z-10 bg-black/40 hover:bg-black/70 text-white border-none" />
                    <CarouselNext className="right-4 z-10 bg-black/40 hover:bg-black/70 text-white border-none" />
                </Carousel>
            </div>
        </section>
    );
}