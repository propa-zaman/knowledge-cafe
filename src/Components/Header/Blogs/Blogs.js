import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Post from '../Post/Post';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='main-container'>
            <div className='blogs-container'>
            {
                blogs.map(blog => <Post
                    key={blog.id}
                    blog={blog}>
                    
                </Post>)
            }
            </div>

            <div className='bookmark-container'>
                <Bookmark></Bookmark>

            </div>
            
        </div>
    );
};

export default Blogs;