import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 1rem 2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 11vh auto 1rem auto;
  box-shadow: 3px 3px 5px lightgray, -3px -3px 5px lightgray;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
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
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #006767;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const OutlineButton = styled.button`
  color: #006767;
  font-size: 1rem;
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
  background-color: #006767;
  color: #eee;
  padding: 0.5rem 1.5rem;
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
        <div style={{ color: '#777', paddingBottom: '0.4rem' }}>CURRENT CHAPTER</div>
        <Chapter>Chapter 17</Chapter>
        <ButtonFill>UPDATE PROGRESS</ButtonFill>
      </RightWrapper>
    </Wrapper>
  );
};

export default Book;
