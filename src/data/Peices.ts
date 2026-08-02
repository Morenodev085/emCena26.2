import { Piece } from "../types/peice";

export const pecas: Piece[] = [
  {
    id: 1,
    title: "Espetáculo Teste 1",
    type: "Longa",
    description: "Descrição de teste para a peça de longa metragem.",
    image: "https://picsum.photos/seed/teatro1/800/600",
    data: "10/08",
    time: "19:00",
    local: "Teatro Municipal de Niterói",
    showInCarousel: true,
  },
  {
    id: 2,
    title: "Espetáculo Teste 2",
    type: "Longa",
    description: "Descrição de teste para o espetáculo de rua.",
    image: "https://picsum.photos/seed/teatro2/800/600",
    data: "12/08",
    time: "16:00",
    local: "Campo de São Bento",
    showInCarousel: true,
  },
  {
    id: 3,
    title: "Espetáculo Teste 3",
    type: "Curta",
    description: "Descrição de teste para a mostra curta.",
    image: "https://picsum.photos/seed/teatro3/800/600",
    data: "15/08",
    time: "20:00",
    local: "Sala Nelson Pereira dos Santos",
    showInCarousel: true,
  },
];