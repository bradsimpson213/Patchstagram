import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Post from '../Post';
import './index.css';


const PostForm = ({users, user, posts}) => {
    // form state
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    // current user state
    const [currentUser, setCurrentUser] = useState('');
    // for our redirect on successful submit
    const history = useHistory();

    const newPost = {
        id: posts.lenght + 1,
        caption,
        author: currentUser,
        date: new Date(),
        image,
        likes: 0 
    };

    const submitForm = (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert("Your Post has errors, cannot submit!");

        posts.push(newPost);
        setCaption('');
        setImage('');
        setValidationErrors([]);
        history.push("/feed");
    }

    useEffect(() => {
        const foundUser = users.filter( ele => ele.fullName === user)
        console.log(foundUser[0]);
        setCurrentUser(foundUser[0]);
    }, [])

    useEffect(() => {
        const errors = [];
        if (!caption.length) errors.push("Please enter a post caption!");
        if (!image.length) errors.push("Please provide an image!");
        setValidationErrors(errors);
    }, [caption, image])

 
    return (
        <div className="form-page">
            <div className="form-container">
                <h1 className="form-header"> Create New Post</h1>
                {hasSubmitted && validationErrors.length > 0 && (
                    <div className="errors-info">
                        <h2>The following errors were found:</h2>
                        <ul>
                            {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <form onSubmit={(e) => submitForm(e)}>
                    <h3 className="form-label">User: { currentUser.fullName }</h3>
                    <div className='form-input-box'>
                        <label 
                            className="form-label" 
                            htmlFor='caption'
                        >
                            Post Caption:
                        </label>
                        <input
                            id="caption"
                            type="text"
                            onChange={(e) => setCaption(e.target.value)}
                            value={caption}
                            >
                        </input>
                    </div>
                    <div className='form-input-box'>
                        <label 
                            className="form-label" 
                            htmlFor='image'
                        >
                            Post Image:
                        </label>
                        <input
                            id="image"
                            type="text"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                            >
                        </input>
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
            <h2>What your new Post will look like...</h2>
            <Post postData={ newPost }/>
        </div>
)};

export default PostForm;