import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as actionCreators from '../../redux/categories/categories';
import { ButtonFill } from '../Button/Button.styled';

const MessageBox = styled.p`
  padding: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { checkStatus } = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    checkStatus();
  };
  return (
    <div style={{ marginTop: '10rem', fontSize: '2rem' }}>
      <MessageBox>{categories}</MessageBox>
      <ButtonFill onClick={handleClick}>Check Status</ButtonFill>
    </div>
  );
}

export default Categories;
