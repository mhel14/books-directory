import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import Books from './components/books/books';
import AddBooks from './components/books/addBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Books />
          <AddBooks />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
