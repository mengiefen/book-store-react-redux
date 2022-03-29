import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBackgroundColor};
  border-radius: 4px;
  margin: 0.938rem auto 0 auto;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.darkBackgroundColor},
    -1px -1px 5px ${({ theme }) => theme.colors.darkBackgroundColor};
  display: flex;
  gap: 5%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.shadowColor},
      -1px -1px 5px ${({ theme }) => theme.colors.shadowColor};
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.tab}) {
    padding: 1rem;
    gap: 2%;
    width: 95%;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 2;

  h4 {
    color: ${({ theme }) => theme.colors.textMediumColor};
    padding-bottom: 0.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  h2 {
    color: ${({ theme }) => theme.colors.textDarkColor};
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
    word-break: break-all;
    text-align: left;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.tab}) {
    width: 40%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;

  .percentage {
    color: ${({ theme }) => theme.colors.textDarkColor};
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  font-family: 'Montserrat', sans-serif;
  p {
    color: ${({ theme }) => theme.colors.textDarkColor};
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }
`;

export {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
  ButtonWrapper,
};
