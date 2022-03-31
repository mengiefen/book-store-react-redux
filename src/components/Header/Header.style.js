import styled from 'styled-components';

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 0 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.light};
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey};
  font-family: 'Montserrat', sans-serif;

  .logo {
    font-size:  1.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  gap: 2rem;
  display: flex;
`;

const NavItem = styled.li`
  font-size: 0.813rem;
  cursor: pointer;  
  letter-spacing: 1.9px;
  text-transform: uppercase;

  .nav-link {
    text-decoration: none;
    letter-spacing: 1.9px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blackOne};
    transition: all 0.6s;
  }
  .active {
    color: ${({ theme }) => theme.colors.blue};
    padding-bottom: 0.75rem;
    border-bottom: 3px solid ${({ theme }) => theme.colors.coolBlue};
  }
`;

const UserProfileWrapper = styled.div`
  width: 2.813rem;
  height: 2.813rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 0.3rem;
  display: flex;align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .user {    
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export {
  Wrapper, NavBar, NavItem, NavList, UserProfileWrapper,
};
