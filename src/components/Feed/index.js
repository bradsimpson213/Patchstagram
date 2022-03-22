import Post from '../Post';
import './index.css';

const Feed = ( { user, posts } ) => {
    const userPosts = posts.length ? posts.filter( (post) => user === post.author.fullName ) : '';
  
    return (
        <div className="feed-container">
            { userPosts.map( (post) => (
                <Post key={ post.id } postData={ post } />
                ))
            }
        </div>
)};

export default Feed;