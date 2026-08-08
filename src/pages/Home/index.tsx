import { FeatureSection } from "../../components/FeatureSection";
import { FestivalCarousel } from "../../components/CarouselFestival";
import { Main } from "../../components/MainContainer";
import { ScheduleBoard } from "../../components/ScheduleBoard"; // 1. Import do novo componente
import { pecas } from "../../data/Peices";
import { Piece } from "../../types/peice";
import test from "../../assets/BgLogoV.png";
import test2 from "../../assets/BgLogoH.png";
import test3 from "../../assets/LOGO1.png";



export function Home() {
    const pecasHome = pecas.filter((pecas) => pecas.type?.toLowerCase() === "longa");

    // Callback para quando o usuário clicar em "Saiba mais"
    const handleSelectPiece = (piece: Piece) => {
        console.log("Peça selecionada:", piece);
        // Ex: abrir modal, redirecionar, etc.
    };

    return (
        <Main>
            {/* Carousel em destaque */}
            <FestivalCarousel title="Peças em Destaque" pieces={pecasHome} />

            {/* Seção Sobre o Festival */}
            <FeatureSection
                title="Niterói em Cena 2026"
                description="O Festival Niterói em Cena é um evento cultural que celebra a diversidade artística da cidade, reunindo apresentações de teatro, dança, música e outras expressões artísticas. Com uma programação rica e variada, o festival proporciona ao público a oportunidade de vivenciar experiências culturais únicas, promovendo a valorização da arte local e o intercâmbio entre artistas e espectadores."
                bgType="image"
                bgSize="100px"

                bgValue={test}
                imageSrc={test3}
            />

            {/* QUADRO DE PROGRAMAÇÃO (Todas as peças organizadas por dia) */}
            <ScheduleBoard
                pieces={pecas}
                onSelectPiece={handleSelectPiece}
            />

            {/* Outra seção institucional/destaque */}
            <FeatureSection
                title="Niterói em Cena 2026"
                description="O Festival Niterói em Cena é um evento cultural que celebra a diversidade artística da cidade, reunindo apresentações de teatro, dança, música e outras expressões artísticas. Com uma programação rica e variada, o festival proporciona ao público a oportunidade de vivenciar experiências culturais únicas, promovendo a valorização da arte local e o intercâmbio entre artistas e espectadores."
                bgType="image"
                bgValue={test2}
                bgRepeat="repeat"
                bgSize="80px"
                reverse={true}
            />
        </Main>
    );
}