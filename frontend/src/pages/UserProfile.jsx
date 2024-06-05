import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar1.jpeg';
import { FaPenToSquare } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setAvatar] = useState(Avatar);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentpassword, setcurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [newConfirmpassword, setNewConfirmPassword] = useState('');


  return (
    
    <section className='profile' style={{marginTop: 130}}>

      <div className='container profile__container'>

        <Link to={`/myposts/se4567t`} className='btn'>My Posts</Link>

        <div className='profile__details'>
          <div className='avatar__wrapper'>

            <div className='profile__avatar'>
              <img src={avatar} alt='avatar' />
            </div>

            <form className='avatar__form'>

              <input type='file' id='avatar' name='avatar' accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} />
              <label htmlFor='avatar'><span><FaPenToSquare /></span></label>

            </form>

            <button className='profile__avatar__btn'><span><FaCheck /></span></button> 

          </div>

          <h1>Hashara Pilapitiya</h1>

          <form className='form profile__form'>

            <p className='form__error__message'>This is an error message.</p>

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