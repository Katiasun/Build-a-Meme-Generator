import React from 'react';

export default function Meme() {
    return(
        <main>
            <form className="form">
                <input type="text" id="" placeholder="Top text" className="form-input"/>
                <input type="text" id="" placeholder="Bottom text" className="form-input"/>

                <button className="form-button">Get a new meme image</button>
            </form>
        </main>
    )
}