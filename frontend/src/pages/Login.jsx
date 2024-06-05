import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../assets/login.jpg';

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    }
    );
  }

  return (
    
    <section className="login" style={{marginTop: 130}}>

      <div className='container'>

        <h2>Sign In</h2>

        <div className='login__container'>

          <div className='login__left'>

            <p className='form__error__message'>This is an error message.</p>

            <form className='form login__form'> 

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