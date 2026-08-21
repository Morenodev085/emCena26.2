import { FeatureSection } from "../../components/FeatureSection";
import { FestivalCarousel } from "../../components/CarouselFestival";
import { Main } from "../../components/MainContainer";
import { ScheduleBoard } from "../../components/ScheduleBoard"; // 1. Import do novo componente
import { pecas } from "../../data/Peices";
import { Piece } from "../../types/peice";
import test from "../../assets/templates.png";
import test2 from "../../assets/BgLogoH.png";
import test3 from "../../assets/coisos.png";
import logo from "../../assets/LOGO 11.png";
import { NavigationSection } from "../../components/NavigationSection";



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
            <NavigationSection />

            {/* Seção Sobre o Festival */}
            <FeatureSection
                titleImageSrc={logo}
                description="O Festival Niterói em Cena é um evento cultural que celebra a diversidade artística da cidade, reunindo apresentações de teatro, dança, música e outras expressões artísticas. Com uma programação rica e variada, o festival proporciona ao público a oportunidade de vivenciar experiências culturais únicas, promovendo a valorização da arte local e o intercâmbio entre artistas e espectadores."
                bgType="image"
                bgSize="256px"
                cardBgColor="bg-[var(--bege-claro)]"
                textColor="text-[var(--marinho)]"
                bgValue={test}
                imageSrc={test3}
                hasImageShadow={false}
                hasImageBorder={false}
                showButton={false}
            />

            {/* QUADRO DE PROGRAMAÇÃO (Todas as peças organizadas por dia) */}
            <section id="Programacao" className="w-full scroll-mt-6">
                <ScheduleBoard
                    pieces={pecas}
                    onSelectPiece={handleSelectPiece}
                />
            </section>

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