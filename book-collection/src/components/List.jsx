import React from 'react';

const List = () => {
  return (
    <li>
      <div className="container">
        <div className="cover">
          <img src="https://upload.wikimedia.org/wikipedia/en/0/04/HauntingOfHillHouse.JPG" alt="Book cover" />
        </div>
        <div className="details">
          <div className="vote">
            <i className="fas fa-caret-up"><b>2</b></i>
          </div>
          <div className="info">
            <div className="title"><a href="https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House">The Haunting of Hill House</a></div>
            <div className="publish">Gothic fiction, psychological horror, 1959</div>
          </div>
          <div className="submission">
            <p>Submitted by:</p>
            <img src="https://upload.wikimedia.org/wikipedia/en/4/43/ShirleyJack.jpg" alt="Uploader image" />
          </div>
        </div>
        <div className="delete">
          <button>Delete</button>
        </div>
      </div>
    </li>
  );
}


export default List;