import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../assets/avatar1.jpeg';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

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

  return ( 
    <Link to={`/posts/users/${authorID}`} className='post__author'>
        <div className='post__author-avatar'>
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.picture}`} alt='Author' />
        </div>

        <div className='post__author-details'>
            <h4>By: {author?.name}</h4> 
            <small><ReactTimeAgo date={new Date(createdAt)} locale='en-US' /></small>
        </div>
    </Link>
  )
}

export default PostAuthor;