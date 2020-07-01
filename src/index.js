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

import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.msg}</h1>
        <p>I'll be there in {this.props.minutes} minutes.</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message minutes={5} color="teal" msg="How are you?" />,
  document.getElementById('root')
)
