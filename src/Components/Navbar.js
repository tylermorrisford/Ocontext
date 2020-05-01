import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div>
            <h1>Current reading list</h1>
            <p>You've got { books.length } to finish! </p>
        </div>
     )
}

export default NavBar;