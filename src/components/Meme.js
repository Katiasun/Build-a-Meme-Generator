import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <label htmlFor="top-text">Top Text</label>
        <input type="text" id="top-text" placeholder="Top text" className="form-input" />

        <label>Bottom Text</label>
        <input type="text" id="" placeholder="Bottom text" className="form-input" />

        <button className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
}
