import React from 'react';

const Form = () => {
  return (
    <div className="adding-form">
      <section>
        <h1>Add a new book</h1>
        <div>
          <form>
            <input type="text" placeholder="Book Name" required />
            <input type="text" placeholder="Genre Name" required />
            <input type="text" placeholder="Release Year" required />
            <input type="text" placeholder="Cover URL" required />
            <input type="text" placeholder="More info URL" required />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default Form;