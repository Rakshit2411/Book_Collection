import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:4000/books')
    .then((response) => {return response.json()})
    .then(data => console.log(data))
  }
  render = () => {
    return (
      null
    );
  }
}

export default App;
