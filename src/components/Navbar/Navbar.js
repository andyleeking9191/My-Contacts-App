import React from 'react';
import Searchbox from '../SearchBox/SearchBox';
import './Navbar.css';


const Navbar = (props) => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>My Contacts App</div>
            <Searchbox handleTxtChange={props.handleTxtChange}/>
        </div>
    )
}

export default Navbar;