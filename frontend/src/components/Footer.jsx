import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">

      <ul className='footer__list'>
        <div className='list1'>
          <li><Link to='/posts/categories/Technology'>Technology</Link></li>
          <li><Link to='/posts/categories/Health'>Health</Link></li>
          <li><Link to='/posts/categories/Sport'>Sport</Link></li>
          <li><Link to='/posts/categories/Entertainment'>Entertainment</Link></li>
          <li><Link to='/posts/categories/Education'>Education</Link></li>
          <li><Link to='/posts/categories/Business'>Business</Link></li>
        </div>

        <div className='list2'>
          <li><Link to='/posts/categories/Lifestyle'>Lifestyle</Link></li>
          <li><Link to='/posts/categories/Agriculture'>Agriculture</Link></li>
          <li><Link to='/posts/categories/Politics'>Politics</Link></li>
          <li><Link to='/posts/categories/Fashion'>Fashion</Link></li>
          <li><Link to='/posts/categories/Food'>Food</Link></li>
          <li><Link to='/posts/categories/Travel'>Travel</Link></li>
        </div>

        <div className='list3'>
          <li><Link to='/posts/categories/Music'>Music</Link></li>
          <li><Link to='/posts/categories/Movies'>Movies</Link></li>
          <li><Link to='/posts/categories/Books'>Books</Link></li>
          <li><Link to='/posts/categories/Science'>Science</Link></li>
          <li><Link to='/posts/categories/Art'>Art</Link></li>
          <li><Link to='/posts/categories/Real Estate'>Real Estate</Link></li>
        </div>

        <div className='list4'>
          <li><Link to='/posts/categories/History'>History</Link></li>
          <li><Link to='/posts/categories/Religion'>Religion</Link></li>
          <li><Link to='/posts/categories/Nature'>Nature</Link></li>
          <li><Link to='/posts/categories/Weather'>Weather</Link></li>
          <li><Link to='/posts/categories/Investment'>Investment</Link></li>
        </div>

      </ul>

      <div className='footer__copy'>
          <small>All Rights Reserved &copy; Copyright, GlobalGist.</small>
      </div>

    </footer>
  )
}

export default Footer;