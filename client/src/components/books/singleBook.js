import React, { Fragment, Component } from 'react';
import { graphql } from 'react-apollo';

// components
import { booksQuery } from './../../queries/queries';
import BookDetails from './bookDetails';


class Book extends Component {

  state={
    bookSelected: null
  }

  render() {
    // console.log(this.state.bookSelected)
    const data = this.props.data;
    const book = data.loading ? 
      <p>Loading...</p> :
      data.books.map(book => {
        return <li key={book.id} onClick={ (e) => this.setState({ bookSelected: book.id}) }>{book.name}</li>
      });
      // console.log(this.state.bookSelected);
    return (
      <Fragment>
        {book}
        <BookDetails bookId={this.state.bookSelected} />
      </Fragment>
    )

  }
}

export default graphql(booksQuery)(Book);