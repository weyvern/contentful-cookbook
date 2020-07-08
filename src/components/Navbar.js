import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <a className='navbar-brand' href='index.html'>
        <img src={logo} alt='Cookbook' width='250px' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExample04'
        aria-controls='navbarsExample04'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarsExample04'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/breakfast'>
              Breakfast
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/lunch'>
              Lunch
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/dinner'>
              Dinner
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
