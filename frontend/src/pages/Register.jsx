import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../assets/register.jpg';

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    <section className="register" style={{marginTop: 130}}>

      <div className='container'>

        <h2>Sign Up</h2>

        <div className='register__container'>

          <div className='register__left'>

            <p className='form__error__message'>This is an error message.</p>

            <form className='form register__form'> 

                <input type='text' placeholder='Name...' name='name' value={userData.name} onChange={changeInputHandler}  />

                <input type='text' placeholder='Email...' name='email' value={userData.email} onChange={changeInputHandler}  />

                <input type='password' placeholder='Password...' name='password' value={userData.password} onChange={changeInputHandler}  />

                <input type='password' placeholder='Confirm Password...' name='confirmPassword' value={userData.confirmPassword} onChange={changeInputHandler}  />

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