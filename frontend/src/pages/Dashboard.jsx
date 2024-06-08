import React , { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DummyPosts } from '../data';
import { GrView } from "react-icons/gr";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

import { UserContext } from '../context/userContext';

const Dashboard = () => {

  const [posts, setPosts] = useState(DummyPosts);

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    
    <section className='dashboard' style={{marginTop: 130}}>
      {
        posts.length ? <div className='container dashboard__container'>
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard__post'>

                <div className='dashboard__post__info'>
                  <div className='dashboard__post__thumbnail'>
                    <img src={post.thumbnail} alt='thumbnail' />
                  </div>
                  <h5>{post.title}</h5>
                </div>

                <div className='dashboard__post__actions'>
                  <Link to={`/posts/${post.id}`} className='view'><span><GrView /></span></Link>

                  <Link to={`/posts/${post.id}/edit`} className='btn sm primary'><span><FaPenToSquare /></span></Link>

                  <Link to={`/posts/${post.id}/delete`} className='btn sm danger'><span><FaTrashAlt /></span></Link>
                </div>

              </article>
            })
          }
          
          
        </div> : <div className='center'>You have np posts yet.</div>
      }
    </section>
  )
}

export default Dashboard;