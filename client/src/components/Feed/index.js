import { useSelector } from 'react-redux'; 

import { useEffect } from 'react';
import Post from '../Post';
import './index.css';

const Feed = () => {
    const currentUser = useSelector((state) => state.userState.currentUser);
    const posts = useSelector((state => state.postState.posts));
    
    const compare = (a, b) => {
        if (a.createdAt < b.createdAt) return 1;
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt === b.createdAt) return 0;
    };
    
    return (
        <div className="feed-container">
            { posts && Object.values(posts).sort(compare).map( (post) => (
                <Post key={ post.id } postData={ post } />
                ))
            }
        </div>
)};

export default Feed;