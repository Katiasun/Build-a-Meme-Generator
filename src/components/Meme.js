import React from "react";
import memesData from "../memesData";

export default function Meme() {
  let url;
  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" id="" placeholder="Bottom text" className="form-input" />

        <button className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
}
