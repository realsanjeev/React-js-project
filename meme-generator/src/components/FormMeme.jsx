import React, { useState, useEffect } from "react";

export default function Meme() {
  const [memesArray, setMemeArray] = useState({});
  const [meme, setRandomMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
//   useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => setMemeArray(data.data.memes));
//   }, []);

// using async function approach
useEffect(()=>{
    const fetchData = async () => {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        setMemeArray(data.data.memes)
    }
    fetchData();
    console.log("Setting up")
}, [])
  console.log(memesArray);
  function handeDisplay(e) {
    const { name, value } = e.target;
    // console.log(name, value)

    setRandomMeme((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function requestHandler(e) {
    e.preventDefault();
    const random = Math.floor(Math.random() * memesArray.length);
    const newUrl = memesArray[random].url;
    setRandomMeme((prevState) => {
      return { ...prevState, randomImage: newUrl };
    });
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={requestHandler}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Top Text"
              className="input-field"
              name="topText"
              onChange={handeDisplay}
              required
            />

            <input
              type="text"
              className="input-field"
              placeholder="Buttom text"
              name="bottomText"
              onChange={handeDisplay}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="generate-button">
              Generate Meme Image 🎰
            </button>
          </div>
        </form>
        <div className="meme">
          {meme.randomImage && (
            <img src={meme.randomImage} alt="Gnerated meme" className="image" />
          )}
          {meme.randomImage && <h2 className="upper-text">{meme.topText}</h2>}
          {meme.randomImage && (
            <h2 className="lower-text">{meme.bottomText}</h2>
          )}
        </div>
      </div>
    </div>
  );
}
