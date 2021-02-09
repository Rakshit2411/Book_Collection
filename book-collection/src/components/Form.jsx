import React, { Component, useState } from 'react';
import List from './List';

const Form = (props) => {

  const { bookList, getData } = props;
  let count = 0;

  bookList.forEach(element => {
    count += 1;
  });

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [release, setRelease] = useState("");
  const [cover, setCover] = useState("");
  const [info, setInfo] = useState("");
  const [photo, setPhoto] = useState("");
  const vote = 1;
  let id = count + 1;

  const sendNewData = (e) => {

    e.preventDefault();

    let newBook = { name, author, release, vote, cover, info, photo, id };

    if (name === "" || author === "" || release === "" || info === "" || photo === "") {
      alert("Please fill out all the following fields: Book name, author name, release year, more info URL and submission field.");
    } else {
      fetch('https://localhost:4000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook)
      })
      getData();

      document.querySelector(".form-fields").reset();
    }
  }

  return (
    <div className="adding-form">
      <section>
        <h1>Add a new book</h1>
        <div>
          <form className="form-fields" onSubmit={sendNewData}>
            <input type="text" placeholder="Book Name" onChange={(e) => { setName(e.target.value) }} required />
            <input type="text" placeholder="Author Name" onChange={(e) => { setAuthor(e.target.value) }} required />
            <input type="text" placeholder="Release Year" onChange={(e) => { setRelease(e.target.value) }} required />
            <input type="text" placeholder="Cover URL" onChange={(e) => { setCover(e.target.value) }} />
            <input type="text" placeholder="More info URL" onChange={(e) => { setInfo(e.target.value) }} required />
            <select type="text" onChange={(e) => { setPhoto(e.target.value) }} required >
              <option value="" >Submitted by:</option>
              <option value="https://www.pngkey.com/png/detail/446-4462649_animated-faces-my-hero-design-clip-art-woman.png">User-1</option>
              <option value="https://diamond-lifts.com/wp-content/uploads/2018/12/65de655460ad0c9bff6af468b33892a4.jpg">User-2</option>
              <option value="https://www.pngitem.com/pimgs/m/75-758538_straight-face-smiling-face-woman-face-animation-hd.png">User-3</option>
              <option value="https://lh3.googleusercontent.com/proxy/VLfQ7maxDMNcAlmPL-eqL_SHYEQ7SoqIbIZWmE2Mw7RM0rr7KnOKaxuJgH2StlabG-eRl6oZ-lXeDLeP4Vb6bTDsiPVc5btOkvbulXkzJNXcZ79Fqg">User-4</option>
            </select>
            <button >Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default Form;