import React, {Component} from 'react'

class Book extends Component {
  render () {
    let book = this.props.book;
    let authors = this.props.book.authors && this.props.book.authors.join(' & ');
    let thumbnail = book.imageLinks ? book.imageLinks.thumbnail:"";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                 style={{ width: 128,
                          height: 193,
                          backgroundImage: `url("${thumbnail}")` }}>
            </div>
            <div className="book-shelf-changer">
              <select
                onChange={(event) => {this.props.refreshAllBooks(
                  this.props.book, event.target.value
                )}}
                value={book.shelf || "none"}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
