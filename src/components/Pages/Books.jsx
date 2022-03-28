import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './Books.styled';
import Book from '../Book/Book';
import Form from '../Form/Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <Wrapper>
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <Book book={book} />
        </div>
      ))}
      <Form />
    </Wrapper>
  );
};

export default Books;
