import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom"

class Booksearch extends Component {
  state = {
    query: "",
    results: []
  }

  searchQuery = query => {
    this.setState({ query: query.trim() }, () => {
      this.searchUpdate(this.state.query)
    })
  }

  searchUpdate(query) {
    query ? BooksAPI.search(query).then(searchUpdate => {
      if (searchUpdate.length < 1) {
        this.setState({ results: [] })
      } else {
        searchUpdate.map(searchUpdate => {
          for (let book of this.props.books) {
            if (book.id === searchUpdate.id) {
              searchUpdate.shelf = book.shelf;
              return searchUpdate
            } else {
              searchUpdate.shelf = "none"
            }
          }
          return searchUpdate
        })
        this.setState({ results: searchUpdate})
      }
    })
    : this.setState({ results: [] })
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"
                to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={event => this.searchQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map((book, key) => (
              <Book refreshAllBooks = {this.props.refreshAllBooks}
                    book={book}
                    key={book.id}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Booksearch
