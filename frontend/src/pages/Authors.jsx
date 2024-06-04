import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar1 from '../assets/avatar1.jpeg';
import Avatar2 from '../assets/avatar2.jpeg';
import Avatar3 from '../assets/avatar3.jpeg';
import Avatar4 from '../assets/avatar4.jpeg';


const AuthorsData = [
  {
    id: 1,
    name: 'Sandun',
    picture: Avatar1,
    posts: 3
  },
  {
    id: 2,
    name: 'Author 2',
    picture: Avatar2,
    posts: 5
  },
  {
    id: 3,
    name: 'Author 3',
    picture: Avatar3,
    posts: 2
  },
  {
    id: 4,
    name: 'Author 4',
    picture: Avatar4,
    posts: 7
  }
];

const Authors = () => {

  const [authors, setAuthors] = useState(AuthorsData);

  return (
    
    <section className='authors' style={{marginTop: 130}}>
      {authors.length > 0 ? <div className='container authors__container'>
        {
          authors.map(({id, picture, name, posts}) => {
            return <Link to={`/posts/users/${id}`} key={id} className='author'>

              <div className='author__avatar'>
                <img src={picture} alt={`Image of ${name}`} />
              </div>

              <div className='author__info'>
                <h3>{name}</h3>
                <p>{posts}</p>
              </div>
              
            </Link>
          
            
          })
        }
      </div> : <p className='center1'>No authors found!</p>}
    </section>

  )
}

export default Authors;