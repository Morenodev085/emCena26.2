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
        <section className="w-full py-8">

            <div className="w-full">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="ml-0">
                        {piecesWithImage.map((piece) => (
                            <CarouselItem 
                                key={piece.id} 
                                className="pl-0 basis-full"
                            >
                                <div className="w-full">
                                    <div className="w-full h-[80vh] overflow-hidden shadow-lg border-y border-[var(--petroleo)] bg-black">
                                        <img
                                            src={piece.image}
                                            alt={piece.title || "Foto do espetáculo"}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselPrevious className="left-4 z-10" />
                    <CarouselNext className="right-4 z-10" />
                </Carousel>
            </div>
        </section>
    );
}