import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:4000/books')
      .then((response) => { return response.json() })
      .then(data => console.log(data))
  }
  render = () => {
    return (
      <React.Fragment>
        <Header />        
      </React.Fragment>
    );
  }
  // "name": "Ulysses",
  //     "genre": "Modernist novel",
  //     "release": 1922,
  //     "vote": 1,
  //     "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/JoyceUlysses2.jpg/330px-JoyceUlysses2.jpg",
  //     "info": "https://en.wikipedia.org/wiki/Ulysses_(novel)",
  //     "author": "James Joyce",
  //     "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Revolutionary_Joyce_Better_Contrast.jpg",
  //     "id": 1
}

export default App;
