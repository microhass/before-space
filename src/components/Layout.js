import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './styles/styledHeader';
import { NavLink } from 'react-router-dom';
import userImage from '../images/user.png';
const links = [
  {
    name: 'dragons',
    href: '/dragons',
  },
  {
    name: 'rockets',
    href: '/rockets',
  },
  {
    name: 'missions',
    href: '/missions',
  },
  {
    name: 'my profile',
    href: '/profile',
  },
];

const Layout = () => (
  <>
    <Header>
      <div>
        <Link to={'/'}>
          <img src={userImage} alt='Logo' />
          <h1>Space Travellers hub</h1>
        </Link>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
    <Outlet />
  </>
);

export default Layout;
