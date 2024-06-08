import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../assets/avatar1.jpeg';
import axios from 'axios';

const PostAuthor = ({authorID, createdAt}) => {

  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${authorID}`);

        setAuthor(response?.data);

      } catch (error) {

        console.log(error);

      }
    }

    getAuthor();

  }, [])

  console.log(author);

  return ( 
    <Link to={`/posts/users/fr3fdg`} className='post__author'>
        <div className='post__author-avatar'>
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.picture}`} alt='Author' />
        </div>

        <div className='post__author-details'>
            <h4>By: Sadun</h4> 
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor;