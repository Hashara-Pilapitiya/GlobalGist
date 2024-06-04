import React, {useState} from 'react';
import Thumnail1 from '../assets/education.jpeg';
import Thumnail2 from '../assets/weather.jpeg';
import Thumnail3 from '../assets/science.jpeg';
import Thumnail4 from '../assets/health.jpeg';
import PostItem from './PostItem';



const DummyPosts = [
    {
        id: 1,
        thumbnail: Thumnail1,
        category: "Education",
        title: "Post 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec ultricies nunc ultricies. Nullam",
        authorID: 3
    },
    {
        id: 2,
        thumbnail: Thumnail2,
        category: "Weather",
        title: "Post 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec ultricies nunc ultricies. Nullam",
        authorID: 1
    },
    {
        id: 3,
        thumbnail: Thumnail3,
        category: "Science",
        title: "Post 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec ultricies nunc ultricies. Nullam",
        authorID: 2
    },
    {
        id: 4,
        thumbnail: Thumnail4,
        category: "Health",
        title: "Post 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec ultricies nunc ultricies. Nullam",
        authorID: 4
    }
]

const Posts = () => { 

    const [posts, setPosts] = useState(DummyPosts);

  return (
    
    <section className="posts">
        <div className='container posts__container'>
            {
                posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div>
    </section>

  )
}

export default Posts;