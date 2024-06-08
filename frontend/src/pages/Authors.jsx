import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const Authors = () => {

  const [authors, setAuthors] = useState([]);

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('http://localhost:5000/api/users');

        setAuthors(response.data);

      } catch (error) {

        console.log(error);

      }

      setIsLoading(false);

    }

    getAuthors();

  }, [])

  if (isloading) {
    return <Loader />
  }

  return (
    
    <section className='authors' style={{marginTop: 130}}>
      {authors.length > 0 ? <div className='container authors__container'>
        {
          authors.map(({_id: id, picture, name, posts}) => {
            return <Link to={`/posts/users/${id}`} key={id} className='author'>

              <div className='author__avatar'>
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${picture}`} alt={`Image of ${name}`} />
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