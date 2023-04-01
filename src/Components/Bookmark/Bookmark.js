import React from 'react';
import './Bookmark.css'

const Bookmark = ({ spendTime, blogTitles, bookmarksCounter }) => {
    return (
        <div className='bookmark'>
            <h3>Spend time on read: {spendTime} min</h3>
            <h3>Bookmarked Blogs: {bookmarksCounter}</h3>
            <div className='bookmark-title'>
                {
                    blogTitles.map((blogTitle, index) => {
                        return (
                            <div key={index}>
                                <div className='blogs-title'>
                                    <p>{blogTitle}</p>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    );
};

export default Bookmark;