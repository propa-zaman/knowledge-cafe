import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Post from '../Post/Post';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [spendTime, setTime] = useState(0);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const handleSpendTime = (time) =>{
        setTime(spendTime + time);
    }
    
    return (
        <div className='main-container'>
            <div className='blogs-container'>
            {
                blogs.map(blog => <Post
                    key={blog.id}
                    blog={blog}
                    handleSpendTime={handleSpendTime}>
                    
                    
                </Post>)
            }
            </div>

            <div className='bookmark-container'>
                <Bookmark 
                spendTime={spendTime}></Bookmark>

            </div>
            
        </div>
    );
};

export default Blogs;