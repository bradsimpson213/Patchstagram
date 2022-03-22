import { useState } from 'react';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import { MdMoreHoriz } from 'react-icons/md';
import './index.css';

const Post = ({ postData }) => {
    const [liked, setLiked] = useState(false)
    const [numLikes, setNumLikes] = useState(postData.likes)

    const addLike = () => {
        setLiked(!liked);
        setNumLikes(numLikes + 1);
    }

    const removeLike = () => {
        setLiked(!liked)
        setNumLikes(numLikes - 1);
    }

    return (
        <div className="post-container">
            <div className="post-box-special">
                <div className="post-box">
                    <img 
                        className="profile-pic" 
                        src={ postData.author.profilePic } 
                        alt="author's profile" 
                    />
                    <h4>{ postData.author.username }</h4>
                </div>
                <div>
                    <MdMoreHoriz className="nav-icon" />
                </div>
            </div>
            <img 
                className="post-image"
                src={ postData.image } alt="post topic" 
            />
            <div className="post-box">
                { liked ?
                    <FaHeart 
                        className="nav-icon"
                        style={{ color: 'red' }}
                        onClick={ removeLike }
                    /> :
                    <FaRegHeart 
                        className="nav-icon"
                        onClick={ addLike }
                        
                    /> 
                }
                <FaRegComment className="nav-icon"/>
            </div>
            <div className="post-box">
                <span>{ numLikes } likes</span>
            </div>
            <div className="post-box">
                <span className="caption-username">{ postData.author.username }</span>
                <span>{ postData.caption }</span>
            </div>

        </div>
)};

export default Post;