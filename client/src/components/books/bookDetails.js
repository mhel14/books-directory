import React from 'react';

import { bookQuery } from './../../queries/queries';
import {graphql} from 'react-apollo';

const BookDetails = (props) => {
  const { book } = props.data;
  console.log(props)
  const bookDetails =
     book ? (
      <div>
        <h3>{book.name}</h3>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>Other books of this author:</p>
        <ul>
          {book.author.books.map(book => {
            return <li key={book.id}>{book.name}</li>
          })}
        </ul>
      </div>
    ):
    (<p>No book selected</p>);
  
  console.log(props)
  return (
    <div className="book-details">
      {bookDetails}
    </div>
  );
}

export default graphql(bookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);