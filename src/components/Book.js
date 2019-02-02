import React, { Component } from 'react'
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'
import Pill from './Pill';

class Book extends Component {
  updateBook = (event) => {
    const { book } = this.props;
    const shelf = event.target.value;
    this.props.updateBook(book, shelf)
  }

  favoriteBook = (book) => {
    const { favoriteBook } = this.props;
    favoriteBook(book)
  }

  render() {
    const { book } = this.props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {
              book.shelf && book.isFavorite ? <MdHeart className="card-logo" fontSize="25px" color="red" onClick={() => this.favoriteBook(book)}/> :
              book.shelf && <MdHeartOutline className="card-logo" fontSize="25px" color="red" onClick={() => this.favoriteBook(book)}/> 
            }
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks&& book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.updateBook} value={book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors[0]}</div>
            {book.categories && book.categories.map((category, i) => <Pill category={category} key={i}/> )}
        </div>
      </li>
    )
  }
  
}

export default Book;