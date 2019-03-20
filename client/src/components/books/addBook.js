import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { authorsQuery, addBook, booksQuery } from './../../queries/queries';

class AddBooks extends Component {

  state = {
    bookName: '',
    genre: '',
    authorId: '',
  }

  formSubmitHanlder = (e) => {
    e.preventDefault();
    this.props.addBook({
      variables: {
        name: this.state.bookName,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{query: booksQuery}]
    })
    console.log(this.state);
  }

  render() {
    console.log(this.state)
    const data = this.props.authorsQuery;
    const authorList = data.loading ? 
    ( <option disabled>Loading...</option> ) :
    (data.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
    )));

    return (
      <form onSubmit={this.formSubmitHanlder} >
        <h3 className="add-book__heading">Add Book</h3>
        <div className="name field">
          <label htmlFor="name">Book Name : </label>
          <input required type="text" name="bookName" onChange={(e) => this.setState({ bookName: e.target.value})} />
        </div>
        <div className="genre field">
          <label htmlFor="genre">Genre : </label>
          <input required type="text" name="genre" onChange={(e) => this.setState({ genre: e.target.value})} />
        </div>
        <div className="author field">
          <label htmlFor="authorId">Author : </label>
          <select required name="authorId" onChange={(e) => this.setState({ authorId: e.target.value})}>
            <option defaultValue disabled value="default">Choose an author</option>
            {authorList}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(authorsQuery, {name: 'authorsQuery'}),
  graphql(addBook, {name: 'addBook'})
)(AddBooks);