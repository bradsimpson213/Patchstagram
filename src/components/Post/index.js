import './index.css';

const Post = ({ postData }) => {

    return (
        <div className='post-container'>
            <div>
                <img 
                    className="profile-pic" 
                    src={ postData.author.profilePic } 
                    alt="author's profile" 
                />
                <h4>{ postData.author.username }</h4>
            </div>
            <img 
                className="post-image"
                src={ postData.image } alt="post topic" 
            />
            <div>
                <h4>Icons here</h4>
            </div>
            <span>{ postData.likes } likes</span>

        </div>
)};

export default Post;