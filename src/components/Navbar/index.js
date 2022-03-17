import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdSearch, MdHomeFilled, MdOutlineAddBox, MdFavoriteBorder } from "react-icons/md";
import './index.css';

const Navbar = () => {
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
                        <MdFavoriteBorder className="nav-icon"/>
                    </NavLink>
                </div>
            </div>
        </div>
)};

export default Navbar;