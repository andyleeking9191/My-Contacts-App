import React from 'react';
import Searchbox from './SearchBox';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>My Contacts App</div>
            <Searchbox/>
        </div>
    )
}

export default Navbar;