import React, { useState } from 'react';

const Form = (props) => {

  const { bookList } = props;
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
    console.log(newBook);
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook)
    })
  }

  return (
    <div className="adding-form">
      <section>
        <h1>Add a new book</h1>
        <div>
          <form>
            <input type="text" placeholder="Book Name" required onChange={(e) => { setName(e.target.value) }} />
            <input type="text" placeholder="Author Name" required onChange={(e) => { setAuthor(e.target.value) }} />
            <input type="text" placeholder="Release Year" required onChange={(e) => { setRelease(e.target.value) }} />
            <input type="text" placeholder="Cover URL" onChange={(e) => { setCover(e.target.value) }} />
            <input type="text" placeholder="More info URL" required onChange={(e) => { setInfo(e.target.value) }} />
            <select type="text" required onChange={(e) => { setPhoto(e.target.value) }}>
              <option value="" disabled selected hidden>Submitted by:</option>
              <option value="https://www.pngkey.com/png/detail/446-4462649_animated-faces-my-hero-design-clip-art-woman.png">User-1</option>
              <option value="https://diamond-lifts.com/wp-content/uploads/2018/12/65de655460ad0c9bff6af468b33892a4.jpg">User-2</option>
              <option value="https://www.pngitem.com/pimgs/m/75-758538_straight-face-smiling-face-woman-face-animation-hd.png">User-3</option>
              <option value="https://lh3.googleusercontent.com/proxy/6kJVQelDhunsuq3NyTXysoo2HA1fbYuVaPo7ht-auFwzoLVux-8zosoGJD_RyeqdAM9_mVnQLHlBRMNs1HxThmXKJpcEn-ypiAeL_Ozb4LCDCIiAFA">User-4</option>
            </select>
            <button onClick={sendNewData}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default Form;