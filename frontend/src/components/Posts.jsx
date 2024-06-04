import React, {useState} from 'react';

import PostItem from './PostItem';

import { DummyPosts } from '../data';


const Posts = () => { 

    const [posts, setPosts] = useState(DummyPosts);

  return (
    
    <section className="posts" style={{marginTop: 130}}>
        {posts.length > 0 ? <div className='container posts__container'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div> : <h2 className='center'>No Posts Found!</h2>}
    </section>

  )
}

export default Posts;