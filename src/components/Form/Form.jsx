import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 as uid } from 'uuid';
import { faker } from '@faker-js/faker';
import * as actionCreators from '../../redux/books/books';
import { ButtonFill } from '../Button/Button.styled';
import {
  Wrapper,
  FormGroup,
  FormInput,
  FormTitle,
  FormSelect,
} from './Form.styled';

const Form = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    progress: null,
    id: '',
    category: '',
  });

  const dispatch = useDispatch();
  const { addBook } = bindActionCreators(actionCreators, dispatch);

  const categories = [
    'Action',
    'Science Fiction',
    'Economy',
    'Engineerig',
    'Software',
  ];

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.category && book.title) {
      addBook({
        ...book,
        id: uid(),
        progress: Math.floor(Math.random() * 100),
        author: faker.name.findName(),
      });
      setBook({
        ...book,
        title: '',
        category: '',
      });
    }
  };

  return (
    <Wrapper>
      <FormTitle>ADD NEW BOOK</FormTitle>
      <FormGroup onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        <FormSelect
          onChange={handleChange}
          name="category"
          value={book.category}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FormSelect>
        <ButtonFill> ADD BOOK</ButtonFill>
      </FormGroup>
    </Wrapper>
  );
};

export default Form;
