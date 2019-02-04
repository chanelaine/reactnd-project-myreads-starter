import React, { Component } from 'react'
import Bookshelf from "./Bookshelf"
import { Link } from "react-router-dom"

class Bookcase extends Component {
  render() {
    const books = this.props.books;
    return(
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf books = {books.filter(book=> book.shelf === "currentlyReading")}
              name = "Currently Reading"
              refreshAllBooks={this.props.refreshAllBooks}
            />
            <Bookshelf books = {books.filter(book=> book.shelf === "wantToRead")}
              name = "Want To Read"
              refreshAllBooks={this.props.refreshAllBooks}
            />
            <Bookshelf books = {books.filter(book=> book.shelf === "read")}
              name = "Read"
              refreshAllBooks={this.props.refreshAllBooks}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookcase
