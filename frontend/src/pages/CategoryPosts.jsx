import React, { useState } from 'react';
import { DummyPosts } from '../data';
import PostItem from '../components/PostItem';

const CategoryPosts = () => {
    
    const [posts, setPosts] = useState(DummyPosts); 

    return (
      
      <section className="category__posts" style={{marginTop: 130}}>
        {posts.length > 0 ? <div className='container category__posts__container'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div> : <h2 className='center'>No Posts Found!</h2>}
  </section>

  )
}

export default CategoryPosts;