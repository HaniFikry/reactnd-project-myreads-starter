import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../BooksAPI';
import Shelf from './Shelf';

class Search extends Component {
  state = {
    query: '',
    books: []
  }

  search = () => {
    BooksApi.search(this.state.query).then(resp => {
      if (resp.error || !this.state.query) {
        this.resetResults()
      } else {
        this.setState({
          books: resp
        })
      }
    })
  }

  resetResults = () => {
    this.setState({
      books: []
    })
  }

  handleChange = (input) => {
    this.setState({
      query: input
    }, () => this.state.query ? this.search() : this.resetResults())
  }


  render() {
    const { query, books } = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.handleChange(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <Shelf shelf={{text: 'Search Results'}} books={books} updateBook={this.props.updateBook} favoriteBook={this.props.favoriteBook}/>
        </div>
      </div>
    )
  }
}

export default Search;