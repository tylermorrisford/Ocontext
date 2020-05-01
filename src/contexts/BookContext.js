import React, {createContext, useState} from 'react';
import shortid from 'shortid';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: shortid.generate() }])
        console.log(shortid.generate());
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContextProvider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContextProvider>
    )

}

export default BookContextProvider;