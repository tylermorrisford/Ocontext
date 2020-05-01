import React from 'react';
import BookContextProvider from './contexts/BookContext';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div>
      <BookContextProvider>
        <NavBar/>
      </BookContextProvider>

    </div>
  );
}

export default App;
