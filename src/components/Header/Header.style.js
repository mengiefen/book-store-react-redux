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
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-bottom: solid 1px ${({ theme }) => theme.colors.darkBackgroundColor};
  font-family: 'Montserrat', sans-serif;

  .logo {
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.primary};
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
  font-size: 1rem;
  cursor: pointer;

  .nav-link {
    text-decoration: none;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.textDarkColor};
    transition: all 0.6s;
  }
  .active {
    color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 0.75rem;
    border-bottom: 3px solid ${({ theme }) => theme.colors.lightPrimary};
  }
`;

const UserProfileWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.textLightColor};
  padding: 0.3rem;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .user {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  Wrapper, NavBar, NavItem, NavList, UserProfileWrapper,
};
