import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Loader from '../components/Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPosts = () => {
    
  const [posts, setPosts] = useState([]);

  const [isloading, setIsLoading] = useState(false);

  const {category} = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`http://localhost:5000/api/posts/categories/${category}`);
        
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

export default CategoryPosts;