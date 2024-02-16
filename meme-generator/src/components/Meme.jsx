import memesData from "../memesData";
import { useEffect, useState } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    // eslint-disable-next-line no-unused-vars
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes));
    })

    function getRandomImage() {
        const memesArr = allMemeImages;
        const random = Math.floor(Math.random() * 100);
        const url = memesArr[random].url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const {name,value} = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }
    console.log(meme);
    return (
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        id="firstInput"
                        className="form--input"
                        type="text"
                        placeholder="Shut up"
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        id="secondInput"
                        className="form--input"
                        type="text"
                        placeholder="and take my money"
                    />
                </div>

                <button onClick={getRandomImage} className="form--btn">
                    Get a meme image
                </button>
            </div>
            <div className="meme">
                <img className="memeImage" src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
