import React from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends React.Component {
  static defaultProps = {
    books: [
      { title: 'The Sun Also Rises', author: 'Ernest Hemingway', pages: 260 },
    ],
  }

  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false,
  }

  toggleOpenClosed = () => {
    this.setState(previousState => ({
      open: !previousState.open,
    }))
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch('http://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => {
        this.setState({ data, loading: false })
      })
  }

  componentDidUpdate() {
    console.log('The component has been updated')
  }

  render() {
    const { books } = this.props
    const { freeBookmark, hiring, loading, data } = this.state

    return (
      <div>
        {hiring ? <Hiring /> : <NotHiring />}
        {loading ? (
          'Loading...'
        ) : (
          <div>
            {data.map(product => (
              <div key={product.id}>
                <h3>Library Product of the Week!</h3>
                <h4>{product.name}</h4>
                <img alt={product.name} src={product.image} height={100} />
              </div>
            ))}
          </div>
        )}
        <h2>The library is {this.state.open ? 'open' : 'closed'}</h2>
        <button onClick={this.toggleOpenClosed}>Change</button>

        {books.map((book, index) => (
          <Book
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={freeBookmark}
            key={index}
          />
        ))}
      </div>
    )
  }
}

Library.propTypes = {
  books: PropTypes.array,
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
}

export default Library
