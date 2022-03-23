import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 0 6.25rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: solid 1px #e8e8e8;  
`;

const Logo = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #0290ff;;
  cursor: pointer;
`;

const NavBar = styled.nav`
  width: auto;
  display: flex;
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
`;

const NavLink = styled.a`
  text-decoration: none;
`;

const UserProfileWrapper = styled.div`
  margin-left: 55%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #777;
  padding: 0.2rem;
`;

const UserProfile = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Header = () => {
  const TEXT = 'BookStore CMS';
  const NAV_ITEMS = [
    {
      name: 'Books',
      link: 'books',
    },
    {
      name: 'Categories',
      link: 'categories',
    },
  ];

  const userStyle = {
    width: '1.5rem',
    height: '1.5rem',
    color: '#0290ff',
  };

  return (
    <Wrapper>
      <NavBar>
        <Logo>{TEXT}</Logo>
        <NavList>
          {NAV_ITEMS.map((nav) => (
            <NavItem key={nav.name}>
              <NavLink className="nav-link">{nav.name}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavBar>
      <UserProfileWrapper>
        <UserProfile>
          <FaUser style={userStyle} />
        </UserProfile>
      </UserProfileWrapper>
    </Wrapper>
  );
};

export default Header;
