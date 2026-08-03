export type PieceType = 
  | 'Longa' 
  | 'Curta' 
  | 'Rua' 
  | 'Estudantil' 
  | 'Rodada' 
  | 'Atividade' 
  | 'Encerramento';

export type Piece = {
    id: number;
    title: string;
    type: PieceType;
    image?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    description: string;
    data: number | string; // Permitindo string caso queira colocar formatado ex: "15/08"
    time: string | number;
    local: string;
    companyName?: string;
    city?: string;
    uf?: string;
    duration?: string;
    showInCarousel?: boolean;
    showInList?: boolean;
    e?: string;
    classif?: string;
};



export type Presenca = {
    nome: string;
    img?: string;
    descricao: string;
};