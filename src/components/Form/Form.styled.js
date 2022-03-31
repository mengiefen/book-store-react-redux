import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 3rem auto 0 auto;
  border-radius: 1px solid ${({ theme }) => theme.colorswarmGrey};
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem 1rem;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: ${({ theme }) => theme.devices.tab}) {
    width: 95%;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.warmGrey};
`;

const FormGroup = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 0.813rem 1.063rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  width: 50%;
  font-size: 1rem;
  &:hover,
  &:focus {
    box-shadow: 0 2px 2px 0.5px ${({ theme }) => theme.colors.blue};
  }
`;

const FormSelect = styled.select`
  padding: 0.813rem 1.063rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  width: 30%;

  &:hover,
  &:focus {
    box-shadow: 0 2px 2px 0.5px ${({ theme }) => theme.colors.blue};
  }
`;

export {
  Wrapper, FormGroup, FormInput, FormTitle, FormSelect,
};
