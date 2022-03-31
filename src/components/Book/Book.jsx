import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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

  const bookList = [];
  books.forEach((book) => {
    bookList.push({ ...book, progress: Math.floor(Math.random() * 100) });
  });

  return (
    <>
      {bookList.map((book) => (
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
            <div className="progressBar">
              <CircularProgressbar value={book.progress} />
            </div>

            <div className="percentage">
              {`${book.progress}%`}
              <span className="progressText">Completed</span>
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
