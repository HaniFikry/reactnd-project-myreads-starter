import React, { Component } from 'react';
import Header from './Header';
import Shelf from './Shelf';
import { Link } from 'react-router-dom' 

class Shelves extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  filterBooks = (bookShelf) => {
    let { books } = this.props
    return books.filter(({ shelf })  => shelf === bookShelf );
  }

  renderShelf(shelf) {
    const { favoriteBook } = this.props
    return(
      <Shelf key={shelf.key} shelf={shelf} books={this.filterBooks(shelf.key)} updateBook={this.updateBook} favoriteBook={favoriteBook} />
    )
  }

  render() {
    const { shelves } = this.props
    return(
      <div>
        <div className="list-books">
            <Header />
            <div className="list-books-content">
              <div>
                { shelves.map(shelf => this.renderShelf(shelf)) }
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' > Search </Link>
            </div>
          </div>
      </div>
    )
  }
}

export default Shelves;
