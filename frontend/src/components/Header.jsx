import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {

  const [showMenu, setShowMenu] = useState(window.innerWidth > 800 ? true : false);

  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }

  return (
    <nav>

      <div className='container nav__container'>

        <Link to='/' className='nav__logo' onClick={closeNavHandler}>
          <img src={Logo} alt='logo' />
        </Link>

        { showMenu && <ul className='nav__menu'>
          <li className='nav__menu-item'>
            <Link to='/profile/fe5sdg' onClick={closeNavHandler}>Hashara Pilapitiya</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/create' onClick={closeNavHandler}>Create a Post</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/authors' onClick={closeNavHandler}>Authors</Link>
          </li>
          <li className='nav__menu-item'>
            <Link to='/logout'onClick={closeNavHandler}>Log Out</Link>
          </li>
        </ul> }

        <button className='nav__toggle-btn' onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <ImCross /> : <FaBars/>}
        </button>

      </div>

    </nav>
  )
}

export default Header;