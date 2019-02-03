import React, { PureComponent } from 'react'
import Pill from './Pill';

class Book extends PureComponent {
  updateBook = (event) => {
    const { book } = this.props;
    const shelf = event.target.value;
    this.props.updateBook(book, shelf)
  }

  favoriteBook = (book) => {
    const { favoriteBook } = this.props;
    favoriteBook(book)
  }

  detectShelf(book) {
    const { shelfBooks } = this.props;
    let detectedBook = shelfBooks.find((shelfBook) => shelfBook.id === book.id)
    return detectedBook ? detectedBook.shelf : 'none'
  }

  render() {
    const { book } = this.props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks&& book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.updateBook} value={book.shelf ? book.shelf : this.detectShelf(book)}>
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