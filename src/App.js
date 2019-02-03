import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Shelves from './components/Shelves'
import Search from './components/Search'
import * as BooksApi from './BooksAPI';


class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {key: 'currentlyReading', text: 'Currently Reading'},
      {key: 'wantToRead', text: 'Want To Read'},
      {key: 'read', text: 'Read'}
    ]
  }

  fetchBooks = async() => {
    let books = await BooksApi.getAll()
    this.setState({
      books: books
    })
  }

  updateBook = (bookToUpdate, shelf) => {
    this.setState((prevState) => ({ 
      books: prevState.books.map((book) => {
        if (book.id !== bookToUpdate.id) {
          return book
        } else {
          book.shelf = shelf
          return book
        }
      })
    }))
    BooksApi.update(bookToUpdate, shelf)
  }

  favoriteBook = (favoriteBook) => {
    this.setState((prevState) => ({ 
      books: prevState.books.map((book) => {
        if (book.id !== favoriteBook.id) {
          return book
        } else {
          book.isFavorite = !book.isFavorite
          return book
        }
      })
    }))
  }

  render() {
    const { books, shelves } = this.state;
    return (
      <div className="app">
        <Route path='/' exact render = {() => 
          <Shelves books={books} updateBook={this.updateBook} fetchBooks={this.fetchBooks} shelves={shelves} favoriteBook={this.favoriteBook}/>
        }/>
        <Route path='/search' render={() => 
          <Search updateBook={this.updateBook} favoriteBook={this.favoriteBook}/>
        }/> 
      </div>
    )
  }
}

export default BooksApp
