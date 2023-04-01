import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {
    const {author, title, images, read_time, publish_date} = props.blog;
    const handleSpendTime = props.handleSpendTime;
    return (
        <div className='post'>
            <img src={images.blog_cover} alt="" className='blog-cover'/> <br />
            <div className='author'>
            <img src={images.author_image} alt="" className='author-image'/>
            <p>{author}</p>
            <p className='read-time'>{read_time}<FontAwesomeIcon icon={faBookmark} /></p>
            </div>
            
            
            <p>{publish_date}</p>
            <h2>{title}</h2>
            <button className='btn-mark' onClick={() => handleSpendTime(props.blog)}>Mark as read
            </button>
            
        </div>
    );
};

export default Post;