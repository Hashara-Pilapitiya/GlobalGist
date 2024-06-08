import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PostItem from './PostItem';

import { DummyPosts } from '../data';

import Loader from '../components/Loader';


const Posts = () => { 

    const [posts, setPosts] = useState([]);

    const [isloading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true);

        try {
          const response = await axios.get('http://localhost:5000/api/posts');
          
          setPosts(response?.data)

        } catch (error) {

          console.log(error);

        }

        setIsLoading(false);

      }

      fetchPosts();

    }, [])

    if(isloading) {
      return <Loader />
    }

    console.log(posts);

  return (
    
    <section className="posts" style={{marginTop: 130}}>
        {posts.length > 0 ? <div className='container posts__container'>
            {
                posts.map(({_id: id, thumbnail, category, title, description, creator, createdAt}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={creator} createdAt={createdAt} />)
            }
        </div> : <h2 className='center'>No Posts Found!</h2>}
    </section>

  )
}

export default Posts;