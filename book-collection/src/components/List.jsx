import React from 'react';
import noImage from './image-not-available.jpg';

const List = (props) => {

  const { book, id } = props;

  // const deleteBook = (id) => {
  //   // e.preventDefault();

  //   fetch('http://localhost:4000/books/'+ id, {
  //     method: 'DELETE',
  //   })
  // }

  return (
    <li key={id}>
      <div className="container">
        <div className="cover">
          {book.cover && <img src={book.cover} alt="Book cover" />}
          {!book.cover && <img src={noImage} alt="Book cover" />}
        </div>
        <div className="details">
          <div className="vote">
            <i className="fas fa-caret-up"><b>{book.vote}</b></i>
          </div>
          <div className="info">
            <div className="title"><a href={book.info}>{book.name}</a></div>
            <div className="publish">{book.author},{book.release}</div>
          </div>
          <div className="submission">
            <p>Submitted by:</p>
            <img src={book.photo} alt="Uploader image" />
          </div>
        </div>
        <div className="delete">
          <button >Delete</button>
        </div>
      </div>
    </li>
  )
}
//onClick={deleteBook(book.id)}

export default List;