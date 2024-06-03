import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
  return (
    <nav>

      <div className='container nav__container'>

        <Link to='/' className='nav__logo'>
          <img src={Logo} alt='logo' />
        </Link>

        <ul className='nav__menu'>
          <li className='nav__menu-item'>
            <Link to='/profile'>Hashara Pilapitiya</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/create'>Create a Post</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/authors'>Authors</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/logout'>Log Out</Link>
          </li>
        </ul>

        <button className='nav__toggle-btn'>
          <IoMdCloseCircle />
        </button>

      </div>

    </nav>
  )
}

export default Header;