import type { BookItemProps } from '../tipos/Books.ts';

const BookItem: React.FC<BookItemProps> = ({ book, onDelete, onToggleStatus }) => (
  <div style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
    <h3>{book.title}</h3>
    <p>Autor: {book.author} | Status: <strong>{book.status}</strong></p>
    <button onClick={() => onToggleStatus(book)}>Já lido</button>
    <button onClick={() => book._id && onDelete(book._id)}>Remover da lista</button>
  </div>
);

export default BookItem