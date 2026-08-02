import { FestivalCarousel } from "../../components/CarouselFestival";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/MainContainer";
import { pecas } from "../../data/Peices";

export function Home() {

    const pecasHome= pecas.filter((pecas) => pecas.type?.toLowerCase() === "longa");
    return (
    <Main>
        <FestivalCarousel title="Peças em Destaque" pieces={pecasHome}/>

    </Main>
    )
    }