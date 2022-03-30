import React from 'react';
import Wrapper from './Books.styled';
import Book from '../Book/Book';
import Form from '../Form/Form';

const Books = () => (
  <Wrapper>
    <div className="book-item">
      <Book />
    </div>
    <Form />
  </Wrapper>
);

export default Books;
