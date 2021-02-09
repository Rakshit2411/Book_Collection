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
    this.voteCount = this.voteCount.bind(this);
  }

  handleData(books) {
    this.setState({
      bookList: books
    });
  }


  voteCount(bookId) {
    this.setState({
      bookList: this.state.bookList.map(book => {
        if (book.id === bookId) {
          book.vote = book.vote + 1;
        }
        return book;
      })
    })
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

  componentWillUnmount() {
    this.voteCount();
  }

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <UList bookList={this.state.bookList} onChange={this.voteCount} />
        <Form bookList={this.state.bookList} getData={() => this.getData} />
      </React.Fragment>
    );
  }
}

export default App;
