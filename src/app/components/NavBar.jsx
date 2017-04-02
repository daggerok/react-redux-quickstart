import React from 'react';
import { NavLink } from 'react-router-dom';

const items = [
  { to: '/home', name: 'Redirect to home' },
  { to: '/',     name: 'Home' },
  { to: '/404',  name: 'Not found' },
];

export const NavBar = () => <div>
  {items.map(({ to, name }, index) =>
    <NavLink key={index} to={to} style={{ paddingRight: '2%' }}>{name}</NavLink>
  )}
</div>;
