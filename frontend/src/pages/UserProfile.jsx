import React , { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../assets/avatar1.jpeg';
import { FaPenToSquare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

import { UserContext } from '../context/userContext';

const UserProfile = () => {

  const [picture, setPicture] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentpassword, setcurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newConfirmpassword, setNewConfirmPassword] = useState('');

  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);


  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      const { name, email, picture } = response.data;
      setName(name);
      setEmail(email);
      setPicture(picture);
    }

    getUser();

  }, []);


  const changeAvatarHandler = () => {
    setIsAvatarTouched(false);

    try {

      const postData = new FormData();
      postData.set('avatar', picture);

      const response =  axios.post(`${process.env.REACT_APP_API_URL}/users/change-picture`, postData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      setPicture(response?.data.picture);


    } catch (error) {

      console.log(error);

    }
  }

  const updateUserDetails = async (e) => {
    e.preventDefault();

    try {

      const userData = new FormData();
      userData.set('name', name);
      userData.set('email', email);
      userData.set('currentpassword', currentpassword);
      userData.set('newpassword', newpassword);
      userData.set('newConfirmpassword', newConfirmpassword);

      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          navigate('/logout');
        }


    } catch (error) {

      console.log(error);

    }

  }



  return (
    
    <section className='profile' style={{marginTop: 130}}>

      <div className='container profile__container'>

        <Link to={`/myposts/${currentUser.id}`} className='btn'>My Posts</Link>

        <div className='profile__details'>
          <div className='avatar__wrapper'>

            <div className='profile__avatar'>
              <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${picture}`} alt='' /> 

              {/* <img src={avatar} alt='' /> */}
            </div>

            <form className='avatar__form'>

              <input type='file' id='avatar' name='avatar' accept='png, jpg, jpeg' onChange={e => setPicture(e.target.files[0])} />
              <label htmlFor='avatar' onClick={() => setIsAvatarTouched(true)}><span style={{cursor: 'pointer'}}><FaPenToSquare /></span></label>

            </form>

            { isAvatarTouched && <button className='profile__avatar__btn' onClick={changeAvatarHandler}><span><FaCheck /></span></button> }

          </div>

          <h1>{currentUser.name}</h1>

          <form className='form profile__form' onSubmit={updateUserDetails}>

            { error && <p className='form__error__message'>{error}</p> }

           <input type='text' placeholder='Full Name...' value={name} onChange={e => setName(e.target.value)} /><br />

            <input type='email' placeholder='Email...' value={email} onChange={e => setEmail(e.target.value)} /><br />

            <input type='password' placeholder='Current Password...' value={currentpassword} onChange={e => setcurrentPassword(e.target.value)} /><br />

            <input type='password' placeholder='New Password...' value={newpassword} onChange={e => setNewPassword(e.target.value)} /><br />

            <input type='password' placeholder='Confirm New Password...' value={newConfirmpassword} onChange={e => setNewConfirmPassword(e.target.value)} /><br />

            <button type='submit' className='btn btn primary'>UPDATE</button>

          </form> 
        </div>

        
      </div>
    </section>
  )
}

export default UserProfile;