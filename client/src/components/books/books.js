import React from 'react';

// Components
import Book from './singleBook';

const Books = (props) => {

  return (
    <ul className="book-list">
      <Book />
    </ul>
  )
}

export default Books;