import React from 'react';
import {Link} from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({postID, category, title, description, authorID, thumbnail, createdAt}) => {

    const shortdesc = description.length > 145 ? description.substring(0, 145) + '...' : description;

    const postTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

  return (
    
    <article className="post">

        <div className='post__thumbnail'>
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
        </div>

        <div className='post__content'>
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortdesc}</p>
            <div className='post__footer'>
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='post__category'>{category}</Link>
            </div>   
        </div>
        
    </article>
  )
}

export default PostItem;