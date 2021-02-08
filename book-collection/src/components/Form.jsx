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
            <input type="text" placeholder="Cover URL" />
            <input type="text" placeholder="More info URL" required />
            <select type="text" required >
              <option value="" disabled selected hidden>Submitted by:</option>
              <option value="https://www.pngkey.com/png/detail/446-4462649_animated-faces-my-hero-design-clip-art-woman.png">User-1</option>
              <option value="https://diamond-lifts.com/wp-content/uploads/2018/12/65de655460ad0c9bff6af468b33892a4.jpg">User-2</option>
              <option value="https://www.pngitem.com/pimgs/m/75-758538_straight-face-smiling-face-woman-face-animation-hd.png">User-3</option>
              <option value="https://lh3.googleusercontent.com/proxy/6kJVQelDhunsuq3NyTXysoo2HA1fbYuVaPo7ht-auFwzoLVux-8zosoGJD_RyeqdAM9_mVnQLHlBRMNs1HxThmXKJpcEn-ypiAeL_Ozb4LCDCIiAFA">User-4</option>
            </select>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}


export default Form;