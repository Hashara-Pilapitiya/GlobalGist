import React, { useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

import { UserContext } from '../context/userContext';

const DeletePost = () => {

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <Link className='btn sm danger'><span><FaTrashAlt /></span></Link>
  )
}

export default DeletePost;