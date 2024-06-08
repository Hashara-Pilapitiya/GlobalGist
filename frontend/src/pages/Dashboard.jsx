import React , { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GrView } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';
import Loader from '../components/Loader';

import { UserContext } from '../context/userContext';
import DeletePost from './DeletePost';

const Dashboard = () => {

  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`http://localhost:5000/api/posts/users/${id}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPosts(response.data);
        
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);

    }

    fetchPosts();

  }, [id]);

  if (isloading) {
    return <Loader />
  }


  return (
    
    <section className='dashboard' style={{marginTop: 130}}>
      {
        posts.length ? <div className='container dashboard__container'>
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard__post'>

                <div className='dashboard__post__info'>
                  <div className='dashboard__post__thumbnail'>
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt='thumbnail' />
                  </div>
                  <h5>{post.title}</h5>
                </div>

                <div className='dashboard__post__actions'>
                  <Link to={`/posts/${post._id}`} className='view'><span><GrView /></span></Link>

                  <Link to={`/posts/${post._id}/edit`} className='btn sm primary'><span><FaPenToSquare /></span></Link>

                 <DeletePost postID={post._id} />

                </div>

              </article>
            })
          }
          
          
        </div> : <div className='center'>You have not posts yet.</div>
      }
    </section>
  )
}

export default Dashboard;