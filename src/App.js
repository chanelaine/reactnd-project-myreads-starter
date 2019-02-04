import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './components/Bookcase'
import Booksearch from './components/Booksearch'
import { Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      });
  }

  refreshAllBooks = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(books => {
        book.shelf = shelf;
        BooksAPI.getAll()
          .then((books) => {
            this.setState({ books })
          });
      })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search"
          render={() => (
            <Booksearch
              books={this.state.books}
              refreshAllBooks={this.refreshAllBooks}/>
          )}
        />
        <Route exact path ="/"
          render = {() => (
            <Bookcase
              books={this.state.books}
              refreshAllBooks={this.refreshAllBooks}/>
          )}/>
    </div>
  )
}}

export default BooksApp
