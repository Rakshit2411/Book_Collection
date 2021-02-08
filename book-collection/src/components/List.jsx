import React from 'react';

const List = (props) => {

  const {book, id} = props;

  return (
    <li key={id}>
      <div className="container">
        <div className="cover">
          <img src={book.cover} alt="Book cover" />
        </div>
        <div className="details">
          <div className="vote">
            <i className="fas fa-caret-up"><b>{book.vote}</b></i>
          </div>
          <div className="info">
            <div className="title"><a href={book.info}>{book.name}</a></div>
            <div className="publish">{book.genre},{book.release}</div>
          </div>
          <div className="submission">
            <p>Submitted by:</p>
            <img src={book.photo} alt="Uploader image" />
          </div>
        </div>
        <div className="delete">
          <button>Delete</button>
        </div>
      </div>
    </li>
  )
}


export default List;