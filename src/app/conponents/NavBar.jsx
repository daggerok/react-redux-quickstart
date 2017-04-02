import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name }) => <NavLink style={{
  paddingRight: '1em'
}} to={to}>{name}</NavLink>;

export const NavBar = props => <div  {...props}>
  <NavItem to='/'     name='Root'/>
  <NavItem to='/home' name='Home'/>
  <NavItem to='/404'  name='Not found'/>
</div>;
