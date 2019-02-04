import React, { Component } from 'react'
import Bookshelf from "./Bookshelf"

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
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default Bookcase
