import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <NavLink className='navbar-brand' to='/'>
        <img src={logo} alt='Cookbook' width='250px' />
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#mainMenu'
        aria-controls='mainMenu'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='mainMenu'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <NavLink
              exact={true}
              activeClassName='active'
              className='nav-link'
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact={true}
              activeClassName='active'
              className='nav-link'
              to='/breakfast'
            >
              Breakfast
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact={true}
              activeClassName='active'
              className='nav-link'
              to='/lunch'
            >
              Lunch
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact={true}
              activeClassName='active'
              className='nav-link'
              to='/dinner'
            >
              Dinner
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact={true}
              activeClassName='active'
              className='nav-link'
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
