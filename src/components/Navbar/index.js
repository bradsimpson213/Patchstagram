import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaRegHeart, } from 'react-icons/fa';
import { MdHomeFilled, MdOutlineAddBox } from 'react-icons/md';
import './index.css';

const Navbar = ({ user }) => {
    const [search, setSearch ] = useState("Search");
    return(
        <div className="nav-container">
            <div className="nav-content-container">
                <div className="nav-logo-container">
                    <img className="nav-logo" 
                        src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                        alt="cat-logo" 
                    />
                    <h1 className="nav-title">Patchstagram</h1>
                </div>
                <div className="nav-search">
                    <FaSearch className="nav-icon"/>
                    <input className="search-input" 
                        type="text" 
                        value={ search } 
                        onChange={ setSearch }
                    />
                </div>
                <div className="icons-container">
                    <NavLink to="/">
                        <MdHomeFilled className="nav-icon"/>
                    </NavLink>
                    <NavLink to="/">
                        <MdOutlineAddBox className="nav-icon"/>
                    </NavLink>
                    <NavLink to="/">
                        <FaRegHeart className="nav-icon"/>
                    </NavLink>
                </div>
                <h2>{ user } is logged in!</h2>
            </div>
        </div>
)};

export default Navbar;