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
  background-color: #fafafa;
  padding: 0.5rem 1rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom:1.5rem ;
  color: #777;
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
