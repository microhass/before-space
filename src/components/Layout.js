import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './styles/styledHeader';
import userImage from '../images/user.png';
const links = [
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
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Header>
    <Outlet />
  </>
);

export default Layout;
