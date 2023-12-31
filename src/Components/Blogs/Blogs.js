import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import Post from '../Post/Post';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [spendTime, setTime] = useState(0);
    const [bookmarksCounter, setBookmarksCounter] = useState(0);
    const [blogTitles, setBlogTitles] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const handleSpendTime = (time) =>{
        setTime(spendTime + time);
    }

    const handlerBookmarks = (blogTitle) => {
        setBookmarksCounter(bookmarksCounter + 1);
        setBlogTitles([...blogTitles, blogTitle]);
      }
    
    return (
        <div className='main-container'>
            <div className='blogs-container'>
            {
                blogs.map(blog => <Post
                    key={blog.id}
                    blog={blog}
                    handleSpendTime={handleSpendTime}
                    handlerBookmarks={handlerBookmarks}
                    blogTitles={blogTitles}>
                    
                    
                </Post>)
            }
            </div>

            <div className='bookmark-container'>
                <Bookmark 
                spendTime={spendTime}
                bookmarksCounter={bookmarksCounter}
                blogTitles={blogTitles}></Bookmark>

            </div>
            
        </div>
    );
};

export default Blogs;