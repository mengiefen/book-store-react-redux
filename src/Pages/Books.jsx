import React, { useState } from 'react';
import styled from 'styled-components';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';

const Wrapper = styled.div`
  padding: 0;
  margin-top: 6.5rem;
`;

const Books = () => {
  const [books, setBooks] = useState([
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 66,
      id: Date.now(),
    },
  ]);
  const onAddBook = (e) => {
    e.preventDefault();
    setBooks([
      ...books,
      {
        category: 'Action',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        progress: 66,
        id: 1,
      },
    ]);
  };

  return (
    <Wrapper>
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <Book book={book} />
        </div>
      ))}
      <Form onAddBook={onAddBook} />
    </Wrapper>
  );
};

export default Books;
