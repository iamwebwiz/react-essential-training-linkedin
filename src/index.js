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

// let bookList = [
//   { title: 'The Sun Also Rises', author: 'Ernest Hemingway', pages: 260 },
//   { title: 'White Teeth', author: 'Zadie Smith', pages: 480 },
//   { title: "Cat's Cradle", author: 'Kurt Vonnegut', pages: 304 },
// ]

// const Book = ({ title, author, pages, freeBookmark }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>By: {author}</p>
//       <p>Pages: {pages} pages</p>
//       <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
//     </section>
//   )
// }

// const Hiring = () => (
//   <div>
//     <p>The library is hiring. Go to www.devslib.com/careers for more info.</p>
//   </div>
// )

// const NotHiring = () => (
//   <div>
//     <p>The library is not hiring. Check back later for more info.</p>
//   </div>
// )

// class Library extends Component {
//   state = {
//     open: true,
//     freeBookmark: true,
//     hiring: true,
//     data: [],
//     loading: false,
//   }

//   toggleOpenClosed = () => {
//     this.setState(previousState => ({
//       open: !previousState.open,
//     }))
//   }

//   componentDidMount() {
//     this.setState({ loading: true })

//     fetch('http://hplussport.com/api/products/order/price/sort/asc/qty/1')
//       .then(data => data.json())
//       .then(data => {
//         this.setState({ data, loading: false })
//       })
//   }

//   componentDidUpdate() {
//     console.log('The component has been updated')
//   }

//   render() {
//     const { books } = this.props
//     const { freeBookmark, hiring, loading, data } = this.state

//     return (
//       <div>
//         {hiring ? <Hiring /> : <NotHiring />}
//         {loading ? (
//           'Loading...'
//         ) : (
//           <div>
//             {data.map(product => (
//               <div key={product.id}>
//                 <h3>Library Product of the Week!</h3>
//                 <h4>{product.name}</h4>
//                 <img alt={product.name} src={product.image} height={100} />
//               </div>
//             ))}
//           </div>
//         )}
//         <h2>The library is {this.state.open ? 'open' : 'closed'}</h2>
//         <button onClick={this.toggleOpenClosed}>Change</button>

//         {books.map((book, index) => (
//           <Book
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//             freeBookmark={freeBookmark}
//             key={index}
//           />
//         ))}
//       </div>
//     )
//   }
// }

class FavoriteColorForm extends Component {
  state = { value: '' }

  setNewValue = e => this.setState({ value: e.target.value })

  submit = e => {
    console.log(`New color: ${this.state.value}`)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          Favorite Color: <input type="color" onChange={this.setNewValue} />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

render(<FavoriteColorForm />, document.getElementById('root'))
