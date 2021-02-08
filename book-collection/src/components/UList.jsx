import React from 'react';
import List from './List';

const UList = (props) => {
  const { bookList } = props;

  function getSort(prop){
    return (
      function(a,b){
        if(a[prop]>b[prop]){
          return -1;
        }
        return 1;
      }
    )
  }
  return (
    <div>
      <ul>
        {bookList.sort(getSort("vote")).map((element, index) => {
          return(<List book={element} id={index} />)
        })}
      </ul>
    </div>
  );
}


export default UList;