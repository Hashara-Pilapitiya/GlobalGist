import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from '../assets/login.jpg';
import axios from 'axios';

import {UserContext} from '../context/userContext.js';

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  const {setCurrentUser}  = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    }
    );
  }

  const loginUser = async (e) => {
    e.preventDefault();
    setError('');

    try {

      const response = await axios.post('http://localhost:5000/api/users/login', userData);

      const user = await response.data;
      setCurrentUser(user);

      navigate('/');

    } catch (error) {

      setError(error.response.data.message);

    }

  }

  return (
    
    <section className="login" style={{marginTop: 130}}>

      <div className='container'>

        <h2>Sign In</h2>

        <div className='login__container'>

          <div className='login__left'>

            <form className='form login__form' onSubmit={loginUser}> 

                { error && <p className='form__error__message'>{error}</p> }

                <input type='text' placeholder='Email...' name='email' value={userData.email} onChange={changeInputHandler} autoFocus />

                <input type='password' placeholder='Password...' name='password' value={userData.password} onChange={changeInputHandler}  />

                <button type='submit' className='btn btn primary'>LOG IN</button><br />

                
            </form>

          </div>
 
          <div className='login__right'>
            <img src={SignIn} alt='' />
          </div> 

        </div>

        <div className='login__account'> 

          <small>Don't have an account? <Link to='/register'>Sign Up Here</Link></small>

        </div>

      </div> 

    </section>

  )
}

export default Login;