import React, { useState } from 'react';
import Book from '../components/Book/Book';
import Form from '../components/Form/Form';

const Books = () => {
  const [book, setBook] = useState([
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 66,
      id: 1,
    },
  ]);
  const onAddBook = () => {
    setBook([
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
    <div>
      <Book book={book} />
      <Form onAddBook={onAddBook} />
    </div>
  );
};

export default Books;
