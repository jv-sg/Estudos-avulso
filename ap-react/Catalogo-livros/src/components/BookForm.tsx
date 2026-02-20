import React, { useState } from 'react';
import type { Book } from '../tipos/Books.ts';

interface BookFormProps {
  onAdd: (book: Omit<Book, '_id'>) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title || !author) return;
    
    onAdd({ title, author, status: "Não lido" });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Autor" />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;