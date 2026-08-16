import { PaginaMostra } from "../../components/PaginaMostra"
import { Main } from "../../components/MainContainer"
import { FeatureSection } from "../../components/FeatureSection"
import  pecas2  from "../../assets/BgCenasCurtas.png"
import { FestivalCarousel } from "../../components/CarouselFestival"
import { pecas } from "../../data/Peices";


export function Pecas() {
        const pecasHome = pecas.filter((pecas) => pecas.type?.toLowerCase() === "longa");
    
    return (
        <Main>
            <FestivalCarousel title="Peças em Destaque" pieces={pecasHome} />

            <PaginaMostra />
        </Main>
    )
}