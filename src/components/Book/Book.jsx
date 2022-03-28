import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/books/books';
import { ButtonFill, ButtonOutline } from '../Button/Button.styled';
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
  ButtonWrapper,
} from './Book.style';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const { removeBook, filterBook } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return (
    <Wrapper key={book.id}>
      <LeftWrapper>
        <h4 onClickCapture={(e) => filterBook(e.target.textContent)}>
          {book.category}
        </h4>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <ButtonWrapper>
          <ButtonOutline>Comment</ButtonOutline>
          <ButtonOutline onClick={() => removeBook(book.id)}>
            Remove
          </ButtonOutline>
          <ButtonOutline>Edit</ButtonOutline>
        </ButtonWrapper>
      </LeftWrapper>

      <MiddleWrapper>
        <div style={{ width: 60, height: 60 }}>
          <CircularProgressbar
            value={book.progress}
            maxValue={100}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#0290ff',
            })}
          />
        </div>

        <div className="percentage">
          {`${book.progress}%`}
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
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
