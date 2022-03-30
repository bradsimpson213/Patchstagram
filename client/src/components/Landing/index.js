import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/userReducer';
import { useHistory } from 'react-router-dom';
import './index.css';


const Landing = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userState.users)
    const [selectedUser, setSelectedUser] = useState(users[0] ? users : "")
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setCurrentUser(selectedUser));
        history.push("/feed");
    };
    
    return(
        <div className="splash-container">
            <div>
                <h1 className="splash-title">Patchstagram</h1>
                <img className="splash-logo" 
                    src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                    alt="cat-logo" 
                />
                <p className="splash-detail">The cat with so much to talk about, he needs his own social media site!</p>   
            </div>
            <div className="login-container">
                <form
                    onSubmit={ handleSubmit }
                >   
                    <div className="form-input">
                        <label 
                            className="user-label" 
                            htmlFor='user'
                        >
                            Select User:
                        </label>
                        <select
                            name='user'
                            className='user-selector'
                            onChange={e => setSelectedUser(e.target.value)}
                            value={ selectedUser }
                        >
                            {users
                                ? users.map((user) => (
                                    <option key={ user.id } value={ user }>{ user.fullName }</option>
                                        ))
                                : ""}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="button-link"
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
 )};

 export default Landing;