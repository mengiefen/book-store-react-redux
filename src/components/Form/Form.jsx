import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 1px solid #777;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #eee;
  padding: 0.5rem 1rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: #777;
`;

const FormGroup = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 0.6rem;
  background-color: #eee;
  width: 50%;
`;

const FormSelect = styled.select`
  padding: 0.6rem;
  background-color: #eee;
  width: 30%;
`;

const ButtonFill = styled.button`
  background-color: #006767;
  color: #eee;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
`;

const Form = () => {
  const categories = [
    'Action',
    'Science Fiction',
    'Economy',
    'Engineerig',
    'Software',
  ];
  return (
    <Wrapper>
      <FormTitle>ADD NEW BOOK</FormTitle>
      <FormGroup>
        <FormInput type="text" placeholder="Book Title" />
        <FormSelect>
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
