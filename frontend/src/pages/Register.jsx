import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from '../assets/register.jpg';
import axios from 'axios';

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    }
    );
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', userData);


      const newUser = response.data;
      console.log(newUser);

      if (!newUser) {
        setError('Something went wrong. Please try again later.');
      }

      navigate('/login');

    } catch (error) {

      setError(error.response.data.message);

    }
  }

  return (
    
    <section className="register" style={{marginTop: 130}}>

      <div className='container'>

        <h2>Sign Up</h2>

        <div className='register__container'>

          <div className='register__left'>


            <form className='form register__form' onSubmit={registerUser}> 

                { error && <p className='form__error__message'>{error}</p> }

                <input type='text' placeholder='Name...' name='name' value={userData.name} onChange={changeInputHandler}  />

                <input type='text' placeholder='Email...' name='email' value={userData.email} onChange={changeInputHandler}  />

                <input type='password' placeholder='Password...' name='password' value={userData.password} onChange={changeInputHandler}  />

                <input type='password' placeholder='Confirm Password...' name='password2' value={userData.password2} onChange={changeInputHandler}  />

                <button type='submit' className='btn btn primary'>REGISTER</button><br />

                
            </form>

          </div>
 
          <div className='register__right'>
            <img src={SignUp} alt='' />
          </div> 

        </div>

        <div className='register__account'> 

          <small>Already have an account? <Link to='/login'>Sign In Here</Link></small>

        </div>

      </div> 

    </section>

  )
}

export default Register;