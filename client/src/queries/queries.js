import { gql } from 'apollo-boost';

const authorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`; 

const booksQuery = gql`
  {
    books{
      name
      id
    }
  }
`; 

const addBook = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name,
      id
    }
  }
`;

const bookQuery = gql`
  query($id: ID) {
    book(id: $id){
      id
      name
      genre
      author {
        name
        id
        books {
          name
          id
          genre
        }
      }
    }
  }
`;

export { booksQuery, authorsQuery, addBook, bookQuery }