import React from 'react';
import './Bookmark.css'

const Bookmark = ({spendTime}) => {
    return (
        <div className='bookmark'>
            <h3>Spend time on read: {spendTime} min</h3>
            <h3>Bookmark Blogs: </h3>
        </div>
    );
};

export default Bookmark;