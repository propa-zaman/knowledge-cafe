import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {
    const {author, title, images, read_time, publish_date} = props.blog;
    const handleSpendTime = props.handleSpendTime;
    const handlerBookmarks = props.handlerBookmarks;
    const blogTitles = props.blogTitles;
    return (
        <div className='post'>
            <img src={images.blog_cover} alt="" className='blog-cover'/> <br />
            <div className='author'>
            <img src={images.author_image} alt="" className='author-image'/>
            <p>{author}</p>
            <p onClick={() => {
                  handlerBookmarks(title);}
            } 
            className='read-time'>{read_time} min
            
            <FontAwesomeIcon icon={faBookmark} /></p>
            </div>
            
            
            <p>{publish_date}</p>
            <h2>{title}</h2>
            <button className='btn-mark' onClick={() => handleSpendTime(read_time)}>Mark as read
            </button>
            
        </div>
    );
};

export default Post;