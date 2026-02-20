export interface Book {
  _id?: string;
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}

export interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (book: Book) => void;
}