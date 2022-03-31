import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  height: auto;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  margin: 0.938rem auto 0 auto;
  box-shadow: 0 0 60px 0 rgba(0,0,0, 0.05);
  display: flex;
  justify-content: space-between; 
  background-color: ${({ theme }) => theme.colors.light};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.grey},
      -1px -1px 5px ${({ theme }) => theme.colors.grey};
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
  
  h4 {
    color: ${({ theme }) => theme.colors.blackTwo};
    padding-bottom: 0.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.blackOne};
    font-size: 1.375rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
    word-break: break-all;
    text-align: left;
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.coolBlue};
  }

  @media screen and (max-width: ${({ theme }) => theme.devices.tab}) {
    width: 40%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem; 

  .percentage {
    color: ${({ theme }) => theme.colors.blackOne};
    font-size: 2rem; 
    font-family: 'Montserrat', sans-serif;
  }

  .progressBar {
    width: 60px;
    height: 60px;    
  }

  .progressText {
    display: block;
    padding-left: 0.2rem;
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.warmGrey};               
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
  font-family: 'Roboto Slab', serif;
  p {
    color: ${({ theme }) => theme.colors.blackOne};
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 0.5rem;
    
  }
`;

export {
  Wrapper, LeftWrapper, MiddleWrapper, RightWrapper, ButtonWrapper,
};
