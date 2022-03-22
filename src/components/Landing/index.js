import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const Landing = ({ users, setUser }) => {
    const [selectedUser, setSelectedUser] = useState(users ? users[0] : '')
    const supersetUser = (val) => {
        setSelectedUser(val);
        setUser(val);
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
            <div>
                <label 
                    className="user-label" 
                    htmlFor='user'
                >
                    Select User:
                </label>
                <select
                    name='user'
                    className='user-selector'
                    onChange={e => supersetUser(e.target.value)}
                    value={ selectedUser }
                >
                    {users
                        ? users.map((user, index) => (
                            <option key={ index } value={ user.fullName }>{ user.fullName }</option>
                                ))
                        : ""}
                
                </select>
            </div>
            <Link className="button-link" 
                to="/feed">Enter</Link>
        </div>
 )};

 export default Landing;