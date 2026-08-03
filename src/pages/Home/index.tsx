import { FeatureSection } from "../../components/FeatureSection";
import { FestivalCarousel } from "../../components/CarouselFestival";
import { Main } from "../../components/MainContainer";
import { pecas } from "../../data/Peices";
import test from "../../assets/logoFundos.png";

export function Home() {

    const pecasHome= pecas.filter((pecas) => pecas.type?.toLowerCase() === "longa");
    return (
    <Main>
        <FestivalCarousel title="Peças em Destaque" pieces={pecasHome}/>
        <FeatureSection
            title="Niterói em Cena 2026"
            description="O Festival Niterói em Cena é um evento cultural que celebra a diversidade artística da cidade, reunindo apresentações de teatro, dança, música e outras expressões artísticas. Com uma programação rica e variada, o festival proporciona ao público a oportunidade de vivenciar experiências culturais únicas, promovendo a valorização da arte local e o intercâmbio entre artistas e espectadores."
            bgType="color"
            bgValue="var(--verde-floresta)"
            imageSrc={test}
        />
                <FeatureSection
            title="Niterói em Cena 2026"
            description="O Festival Niterói em Cena é um evento cultural que celebra a diversidade artística da cidade, reunindo apresentações de teatro, dança, música e outras expressões artísticas. Com uma programação rica e variada, o festival proporciona ao público a oportunidade de vivenciar experiências culturais únicas, promovendo a valorização da arte local e o intercâmbio entre artistas e espectadores."
            bgType="color"
            bgValue="var(--rosa-coral)"
            imageSrc=""
            reverse={true}
        />
    </Main>
    )
    }