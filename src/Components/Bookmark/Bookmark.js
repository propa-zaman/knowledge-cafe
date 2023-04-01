import React from 'react';
import './Bookmark.css'

const Bookmark = ({spendTime, bookmarksCounter}) => {
    return (
        <div className='bookmark'>
            <h3>Spend time on read: {spendTime} min</h3>
            <h3>Bookmarked Blogs: {bookmarksCounter}</h3>
        </div>
    );
};

export default Bookmark;