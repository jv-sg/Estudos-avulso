import React, { useState } from 'react';
import axios from 'axios';
import type { Book } from '../tipos/Books.ts';
import BookForm from './BookForm.tsx';
import BookItem from './BookItem.tsx';

const API_URL = 'https://crudcrud.com/api/c86e20c4194c447b97af4602ecdc0e1e/books';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await axios.get<Book[]>(API_URL);
    setBooks(res.data);
  };

  const addBook = async (book: Omit<Book, '_id'>) => {
    const res = await axios.post<Book>(API_URL, book);
    setBooks([...books, res.data]);
  };

  const deleteBook = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setBooks(books.filter(b => b._id !== id));
  };

  const toggleStatus = async (book: Book) => {
    const updatedBook = { 
      ...book, 
      status: book.status === "Lido" ? "Não lido" : "Lido" 
    };
    // console.log("teste 2")
    const { _id, ...dataToSend } = updatedBook; //_id fuca vermelho mas se remove ele para de funcionar???
    await axios.put(`${API_URL}/${book._id}`, dataToSend);
    fetchBooks(); // teste de verificar sinclonia
  };

  return (
    <div>
      <h1>Minha Biblioteca</h1>
      <BookForm onAdd={addBook} />
      {books.map(book => (
        <BookItem 
          key={book._id} 
          book={book} 
          onDelete={deleteBook} 
          onToggleStatus={toggleStatus} 
        />
      ))}
    </div>
  );
};

export default BookList;