import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../assets/avatar1.jpeg';

const PostAuthor = () => {
  return ( 
    <Link to={`/posts/users/fr3fdg`} className='post__author'>
        <div className='post__author-avatar'>
            <img src={Avatar} alt='Author' />
        </div>

        <div className='post__author-details'>
            <h4>By: Sadun</h4>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor;