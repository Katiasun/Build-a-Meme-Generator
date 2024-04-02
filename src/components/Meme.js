import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
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
      <div className="meme-container">
        <img src={meme.randomImage} className="meme-image" alt="pic" />
      </div>
    </main>
  );
}
