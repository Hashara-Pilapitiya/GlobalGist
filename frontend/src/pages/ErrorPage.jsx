import React from 'react';
import { Link } from 'react-router-dom';
import { MdMoodBad } from "react-icons/md";

const ErrorPage = () => {
  return (
    <section className='error__page'>
      <div className='center'>
        <Link to='/' className='btn primary'>Go Back Home</Link>
        <h2>Page Not Found! <span><MdMoodBad /></span> </h2>
      </div>
    </section>
  )
}

export default ErrorPage;