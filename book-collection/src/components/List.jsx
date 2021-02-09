import React from 'react';
import noImage from './image-not-available.jpg';

const List = (props) => {

  const { book, id, onChange } = props;

  const deleteBook = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/books/' + book.id, {
      method: 'DELETE',
    })
  }

  return (
    <li key={id}>
      <div className="container">
        <div className="cover">
          {book.cover && <img src={book.cover} alt="Book cover" />}
          {!book.cover && <img src={noImage} alt="Book cover" />}
        </div>
        <div className="details">
          <div className="vote">
            <i className="fas fa-caret-up" onClick={() => onChange(book.id)}><b>{book.vote}</b></i>
          </div>
          <div className="info">
            <div className="title"><a href={book.info} target="_blank">{book.name}</a></div>
            <div className="publish">{book.author},{book.release}</div>
          </div>
          <div className="submission">
            <p>Submitted by:</p>
            {book.photo && <img src={book.photo} alt="Uploader image" />}
            {!book.photo && <img src={noImage} alt="Book cover" />}
          </div>
        </div>
        <div className="delete">
          <button onClick={deleteBook}>Delete</button>
        </div>
      </div>
    </li>
  )
}

export default List;