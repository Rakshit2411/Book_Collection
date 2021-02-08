import React from 'react';
import List from './List';

const UList = (props) => {
  const { bookList } = props;
  return (
    <div>
      <ul>
        {bookList.map((element, index) => {
          return(<List book={element} id={index} />)
        })}
      </ul>
    </div>
  );
}


export default UList;