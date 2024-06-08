import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../context/userContext';

const EditPost = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [desc, setDesc] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { id } = useParams(); 

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false]},],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }

  const formats = [
    'header', 
    'bold', 'italic', 'underline', 'strike','blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  const PostCategories = [
    'Technology', 'Health', 'Sport', 'Entertainment', 'Education', 'Business', 'Politics', 'Fashion', 'Food', 'Travel', 'Lifestyle','Agriculture', 'Music', 'Movies', 'Books', 'Science', 'Art', 'History', 'Religion', 'Nature', 'Weather', 'Investment', 'Real Estate'
  ]

  useEffect(() => {
    const getPost = async () => {

      try { 

      const response = await axios.get(`http://localhost:5000/api/posts/${id}`);

      setTitle(response.data.title);
      setDesc(response.data.description);

    } catch (error) {

      console.log(error);

    }

  }

    getPost();


  }, [id]);

  const editPost = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.set('title', title);
    postData.set('category', category);
    postData.set('description', desc);
    postData.set('thumbnail', thumbnail);

    try {
      const response = await axios.patch(`http://localhost:5000/api/posts/${id}`, postData, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
         navigate('/');
      }

    } catch (error) {

      setError(error.message);

    }

  }

  return (
    
    <section className='cerate__post' style={{marginTop: 130}}>
      <div className='container'>

        <h2>Edit Post</h2>

        { error && <p className='form__error__message' style={{marginLeft: -95, marginBottom: 10}}>
          {error}
        </p> }

        <form className='form create__post__form' onSubmit={editPost}>

          <input type='text' value={title} placeholder='Title...' onChange={e => setTitle(e.target.value)} autoFocus /><br /><br />

          <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
            {
              PostCategories.map(category =>
                <option key={category}>{category}</option>
              )
            }       

          </select>

          <br /><br />

          <ReactQuill theme='snow' value={desc} onChange={setDesc} modules={modules} formats={formats} placeholder='Description...' className='textarea'/>

          <br />

          <input className='choose' type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>

          <br /><br /><br />

          <button type='submit' className='create btn primary'>UPDATE</button>

          

        </form>

      </div>
    </section>

  )
}

export default EditPost;