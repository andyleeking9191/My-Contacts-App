import React from 'react';
import './SearchBox.css';

const Searchbox = (props) => {
    return (
        <input 
            className="navbar__searchbox"
            type="text"
            placeholder="Search Contacts"
            onChange={props.handleTxtChange}
        >
        </input>
    )
}

export default Searchbox;