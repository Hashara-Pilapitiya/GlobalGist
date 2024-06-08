import React, { useEffect, useContext, useState } from 'react';
import PostAuthor from '../components/PostAuthor';
import { Link } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Thumnail from '../assets/agriculture.jpeg';

import { UserContext } from '../context/userContext';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import DeletePost from './DeletePost';
import axios from 'axios';

const PostDetail = () => {

  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {currentUser} = useContext(UserContext);

  useEffect(() => {

    const getPost = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);

        setPost(response.data);

      } catch (error) {

        setError(error);

      }

      setIsLoading(false);

    }

    getPost();
 
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return (
    
    <section className='post__detail'>

      { error && <p className='error'>{error}</p> }

      { post && <div className='container post__detail__container'>

        <div className='post__detail__header'>

          <PostAuthor authorID={post.creator} createdAt={post.createdAt} /> 

          { currentUser?.id == post?.creator &&  <div className='post__detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'><span><FaPenToSquare /></span></Link>
            <DeletePost postID={id} />
          </div>}

        </div>

        <h1>{post.title}</h1>

        <div className='post__detail__thumbnail'>
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt='thumbnail' />
        </div>

        <p dangerouslySetInnerHTML={{__html: post.description}}></p>

      </div> }
    </section>
  )
}

export default PostDetail;