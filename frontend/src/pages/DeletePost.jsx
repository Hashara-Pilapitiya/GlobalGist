import React, { useEffect, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';

import { UserContext } from '../context/userContext';


const DeletePost = ({postID: id}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  const removePost = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        if(location.pathname == `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate('/');
        }
      }

      
    } catch (error) { 

      console.log("Coudn't delete post");

    }
  }




  return (
    <Link className='btn sm danger' onClick={() => removePost(id)}><span><FaTrashAlt /></span></Link>
  )
}

export default DeletePost;