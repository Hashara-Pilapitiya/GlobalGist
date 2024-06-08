import React from 'react';
import LodingGif from '../assets/loding.gif';

const Loader = () => {
  return (
    <div className='loader'>
        <div className='loader__image'>
            <img src={LodingGif} alt='Loading...' />
        </div>
    </div>
  )
}

export default Loader;