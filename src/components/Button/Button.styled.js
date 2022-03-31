import styled from 'styled-components';

const ButtonFill = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  outline: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.801rem 1.188rem 0.886rem 1.375rem;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  font-weight: 300;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:active {
    transform: scale(0.98);
  }
`;

const ButtonOutline = styled.button`
  color: ${({ theme }) => theme.colors.coolBlue};
  outline: none;
  font-size: 0.813rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export { ButtonFill, ButtonOutline };
