import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ButtonFill, ButtonOutline } from '../Button/Button.styled';
import { getAllBooks, deleteBook, filterBooks } from '../../redux/books/books';
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
  ButtonWrapper,
} from './Book.style';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Wrapper key={book.item_id}>
          <LeftWrapper>
            <h4
              onClickCapture={(e) => {
                dispatch(filterBooks(e.target.textContent));
              }}
            >
              {book.category}
            </h4>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <ButtonWrapper>
              <ButtonOutline>Comment</ButtonOutline>
              <ButtonOutline
                onClick={() => {
                  dispatch(deleteBook(book.item_id));
                }}
              >
                Remove
              </ButtonOutline>
              <ButtonOutline>Edit</ButtonOutline>
            </ButtonWrapper>
          </LeftWrapper>

          <MiddleWrapper>
            <div style={{ width: 60, height: 60 }}>
              <CircularProgressbar
                value={Math.floor(Math.random() * 100)}
                maxValue={100}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: '#0290ff',
                })}
              />
            </div>

            <div className="percentage">
              {`${Math.floor(Math.random() * 100)}%`}
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
            </div>
          </MiddleWrapper>

          <RightWrapper>
            <div style={{ color: '#777', paddingBottom: '0.4rem' }}>
              CURRENT CHAPTER
            </div>
            <p>Chapter 17</p>
            <ButtonFill>UPDATE PROGRESS</ButtonFill>
          </RightWrapper>
        </Wrapper>
      ))}
    </>
  );
};

export default Book;
