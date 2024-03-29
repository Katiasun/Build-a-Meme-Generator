import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" id="" placeholder="Bottom text" className="form-input" />

        <button onClick={getMemeImg} className="form-button" type="button">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme-image" alt="pic" />
    </main>
  );
}
