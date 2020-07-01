// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
  { title: 'The Sun Also Rises', author: 'Ernest Hemingway', pages: 260 },
  { title: 'White Teeth', author: 'Zadie Smith', pages: 480 },
  { title: "Cat's Cradle", author: 'Kurt Vonnegut', pages: 304 },
]

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

class Library extends Component {
  state = { open: true, freeBookmark: true }

  toggleOpenClosed = () => {
    this.setState(previousState => ({
      open: !previousState.open,
    }))
  }

  render() {
    const { books } = this.props

    return (
      <div>
        <h2>The library is {this.state.open ? 'open' : 'closed'}</h2>
        <button onClick={this.toggleOpenClosed}>Change</button>

        {books.map((book, index) => (
          <Book
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
            key={index}
          />
        ))}
      </div>
    )
  }
}

render(<Library books={bookList} />, document.getElementById('root'))
