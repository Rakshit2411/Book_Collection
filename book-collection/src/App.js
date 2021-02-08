import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UList from './components/UList';
import Form from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    }

    this.handleData = this.handleData.bind(this);
  }

  handleData(books) {
    this.setState({
      bookList: books
    });
  }

  getData() {
    fetch('http://localhost:4000/books')
      .then((response) => { return response.json() })
      .then(data => this.handleData(data))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <UList bookList={this.state.bookList} />
        <Form bookList={this.state.bookList}/>
      </React.Fragment>
    );
  }
  // ,
  //   {
  //     "name": "Jurassic Park",
  //     "genre": "Science fiction novel",
  //     "release": 1990,
  //     "vote": 5,
  //     "cover": "https://upload.wikimedia.org/wikipedia/en/3/33/Jurassicpark.jpg",
  //     "info": "https://en.wikipedia.org/wiki/Jurassic_Park_(novel)",
  //     "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MichaelCrichton_2.jpg/330px-MichaelCrichton_2.jpg"
  //   }
}

export default App;
