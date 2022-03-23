import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';

const Wrapper = styled.div`
  width: 80%;
  margin: 3rem auto 0 auto;
  border-radius: 1px solid #777;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fafafa;
  padding: 0.5rem 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const FormTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #888;
`;

const FormGroup = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 0.813rem 1.063rem;
  background-color: #fafafa;
  border: 1px solid#e8e8e8;
  width: 50%;
  font-size: 1rem;
  &:hover,
  &:focus {
    border: 1px solid #0290ff;
  }
`;

const FormSelect = styled.select`
  padding: 0.813rem 1.063rem;
  border: 1px solid #e8e8e8;
  background-color: #fafafa;
  font-size: 1rem;
  width: 30%;

  &:hover,
  &:focus {
    border: 1px solid #0290ff;
  }
`;

const ButtonFill = styled.button`
  background-color: #0290ff;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  padding: 0.801rem 1.188rem 0.886rem 1.375rem;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  font-weight: 600;
  cursor: pointer;
`;

const Form = ({ onAddBook }) => {
  const [book, setBook] = useState({
    title: '',
    author: faker.name.findName(),
    progress: Math.floor(Math.random() * 100),
    id: Date.now(),
    category: '',
  });

  const categories = ['Action', 'Science Fiction', 'Economy', 'Engineerig', 'Software'];

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.category && book.title) onAddBook(book);
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
        <FormSelect onChange={handleChange} name="category" value={book.category}>
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

Form.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default Form;
