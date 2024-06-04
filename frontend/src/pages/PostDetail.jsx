import React from 'react';
import PostAuthor from '../components/PostAuthor';
import { Link } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Thumnail from '../assets/agriculture.jpeg';

const PostDetail = () => {
  return (
    
    <section className='post__detail'>

      <div className='container post__detail__container'>

        <div className='post__detail__header'>

          <PostAuthor />

          <div className='post__detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'><span><FaPenToSquare /></span></Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'><span><FaTrashAlt /></span></Link>
          </div>

        </div>

        <h1>This is the post title!</h1>

        <div className='post__detail__thumbnail'>
          <img src={Thumnail} alt='thumbnail' />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa error a voluptatibus odit. Voluptate minima ipsam eligendi quae animi aliquid veritatis dicta soluta blanditiis. Consequatur officiis, odit neque repellendus ab totam. Quasi inventore maxime tempora quaerat dolor, repellendus officiis sed.
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, esse corporis sequi sed ratione non quidem, harum fugit saepe temporibus ullam ipsam magnam recusandae accusamus eos quo dolorem eveniet nihil! Debitis illo ratione, est a hic accusantium distinctio dolore repudiandae ipsam libero ea. Voluptas repellat, ad quaerat impedit exercitationem rem dolore aperiam sit deserunt iste illum omnis iure repudiandae reprehenderit ut nostrum porro corporis rerum? Temporibus, ad iure quos numquam nostrum delectus consectetur! Culpa, rem! Dolores fuga minus fugiat error? Alias quisquam, tempora accusamus porro laudantium numquam accusantium harum natus a necessitatibus maxime excepturi ipsum dolorum, autem quis velit optio?</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia illo ut aspernatur praesentium reprehenderit, inventore a, nesciunt asperiores quis quasi repellendus similique nemo maiores harum, voluptatum vero blanditiis est. Natus laboriosam assumenda, consequatur, nam ex eligendi explicabo expedita similique blanditiis numquam mollitia molestias quam nostrum labore. Voluptatem corrupti perferendis beatae ducimus enim quos, cumque hic!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatem porro a quae tempore ratione accusantium deleniti ad. Modi, odio! Doloremque perspiciatis nesciunt, quos quia natus quo! Quod laudantium voluptas, at quia tenetur soluta dolores, natus, vitae totam odit molestiae.</p>

      </div>
    </section>
  )
}

export default PostDetail;