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
      progress: 64,
      id: 1,
    },
    {
      category: 'Action',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 88,
      id: 2,
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty Century',
      author: 'Suzanne Collins',
      progress: 66,
      id: 3,
    },
  ]);
  const onAddBook = (book) => {
    setBooks([...books, book]);
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
