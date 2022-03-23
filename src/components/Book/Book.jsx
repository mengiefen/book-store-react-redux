import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 1rem 2rem;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 6.5rem auto 1rem auto;
  box-shadow: 1px 1px 100px #e8e8e8, -1px -1px 100px #e8e8e8;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const BookType = styled.h4`
  color: #555;
  padding-bottom: 0.3rem;
`;

const BookTitle = styled.h2`
  color: #111;
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
`;

const BookAuthor = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: #4386bf;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const OutlineButton = styled.button`
  color: #4386bf;
  font-size: 0.9rem;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Percentage = styled.div`
  color: #222;
  font-size: 2rem;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Chapter = styled.p`
  color: #222;
  font-size: 1rem;
  padding-bottom: 1rem;
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

const Book = () => {
  const text = 'Comments';
  return (
    <Wrapper>
      <LeftWrapper>
        <BookType>Action</BookType>
        <BookTitle> The Hunger Games</BookTitle>
        <BookAuthor>Suzanne Collins</BookAuthor>
        <ButtonWrapper>
          <OutlineButton>{text}</OutlineButton>
          <OutlineButton>Remove</OutlineButton>
          <OutlineButton>Edit</OutlineButton>
        </ButtonWrapper>
      </LeftWrapper>

      <MiddleWrapper>
        <div style={{ width: 60, height: 60 }}>
          <CircularProgressbar value={66} maxValue={100} />
        </div>

        <Percentage>
          66%
          <span
            style={{
              display: 'block',
              paddingLeft: '0.2rem',
              fontSize: '1rem',
              color: '#777',
            }}
          >
            Completed
          </span>
        </Percentage>
      </MiddleWrapper>

      <RightWrapper>
        <div style={{ color: '#777', paddingBottom: '0.4rem' }}>
          CURRENT CHAPTER
        </div>
        <Chapter>Chapter 17</Chapter>
        <ButtonFill>UPDATE PROGRESS</ButtonFill>
      </RightWrapper>
    </Wrapper>
  );
};

export default Book;
