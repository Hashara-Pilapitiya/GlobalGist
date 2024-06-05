import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [desc, setDesc] = useState('');
  const [thumbnail, setThumbnail] = useState('');

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

  return (
    
    <section className='cerate__post' style={{marginTop: 130}}>
      <div className='container'>

        <h2>Create Post</h2>

        <p className='form__error__message'>
          This is an error message.
        </p>

        <form className='form create__post__form'>

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

          <button type='submit' className='create btn primary'>CREATE</button>

          

        </form>

      </div>
    </section>

  )
}

export default CreatePost;