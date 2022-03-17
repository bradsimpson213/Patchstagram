import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdSearch, MdHomeFilled, MdOutlineAddBox, MdFavoriteBorder } from "react-icons/md";
import './index.css';

const Navbar = () => {
    const [search, setSearch ] = useState("Search");

    return(
        <div className="nav-container">
            <div className="nav-search">
                
                <input className="search-input" 
                    type="text" 
                    value={ search } 
                    onChange={ setSearch }
                />
            </div>
            <div>
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
)};

export default Navbar;