import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const { text } = props.shelf;
  const { books, updateBook, favoriteBook } = props;
  return(
    <div className="bookshelf">
      { books.length > 0 && <h2 className="bookshelf-title">{text}</h2> }
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => <Book key={book.id} book={book} updateBook={updateBook} favoriteBook={favoriteBook}/>)
            }
          </ol>
        </div>
    </div>
  )
}

export default Shelf;