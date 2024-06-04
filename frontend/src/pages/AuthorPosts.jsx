import React, { useState } from 'react';
import { DummyPosts } from '../data';
import PostItem from '../components/PostItem';

const AuthorPosts = () => {

  const [posts, setPosts] = useState(DummyPosts); 

  return (
    
      <section className="author__posts" style={{marginTop: 130}}>
        {posts.length > 0 ? <div className='container author__posts__container'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div> : <h2 className='center'>No Posts Found!</h2>}
</section>

  )
}

export default AuthorPosts;