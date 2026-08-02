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

// Mapeamento de cores usando classes do Tailwind ou suas variáveis globais
export const colorMap: Record<PieceType, string> = {
  Longa: "bg-emerald-600 text-white",
  Curta: "bg-purple-600 text-white",
  Rua: "bg-pink-600 text-white",
  Estudantil: "bg-amber-400 text-slate-900",
  Rodada: "bg-stone-200 text-slate-900",
  Atividade: "bg-stone-200 text-slate-900",
  Encerramento: "bg-stone-200 text-slate-900",
};

export type Presenca = {
    nome: string;
    img?: string;
    descricao: string;
};