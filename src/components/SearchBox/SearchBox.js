import React from 'react';
import './SearchBox.css';

const Searchbox = () => {
    return (
        <input 
            className='navbar__searchbox'
            type="text"
            placeHolder="Search Contacts"
        >
        </input>
    )
}

export default Searchbox;