import React from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  NavBar,
  NavItem,
  NavList,
  UserProfileWrapper,
} from './Header.style';

const Header = () => {
  const NAV_ITEMS = [
    {
      name: 'Books',
      link: '/',
    },
    {
      name: 'Categories',
      link: 'categories',
    },
  ];

  return (
    <Wrapper>
      <NavBar>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h1 className="logo">BookStore CMS</h1>
        </NavLink>

        <NavList>
          {NAV_ITEMS.map((nav) => (
            <NavItem key={nav.name}>
              <NavLink
                className={({ isActive }) => {
                  if (isActive) return 'nav-link active';
                  return 'nav-link';
                }}
                to={nav.link}
              >
                {nav.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavBar>
      <UserProfileWrapper>
        <NavLink to="/">
          <FaUser className="user" />
        </NavLink>
      </UserProfileWrapper>
    </Wrapper>
  );
};

export default Header;
