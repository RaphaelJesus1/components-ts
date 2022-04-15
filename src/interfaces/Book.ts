interface CreateBook {
  name: string;
  author: string;
  publisher: string;
  year: number;
}

interface Book extends CreateBook {
  id: number;
}

interface BookApiResponse {
  id?: number;
  nome: string;
  autor: string;
  editora: string;
  ano: number;
}

const parseBook = (res: BookApiResponse): Book => {
  return {
    id: Number(res.id),
    name: res.nome,
    author: res.autor,
    publisher: res.editora,
    year: Number(res.ano),
  };
};

const parseBookApiResponse = (b: CreateBook): BookApiResponse => {
  return {
    nome: b.name,
    autor: b.author,
    editora: b.publisher,
    ano: b.year,
  };
};
