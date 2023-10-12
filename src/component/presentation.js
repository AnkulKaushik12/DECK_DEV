import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import "./presentation.scss";

function Custom() {

// const location = useLocation();
// const data = useParams();
// console.log(data);
let userId = 1;
let deckId = 2;

let imgs=[]
for(var i=0; i<5; i++){
imgs.push({id:{i},value:`http://localhost:5001/uploads/${userId}/${deckId}/--${i}.jpg`})
}


  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div className="main">
      <div className="slides-container">
        <div className="thumbnails">
          {imgs.map((data, i) => (
            <div
              className={`thumbnail ${wordData.id === i ? "clicked" : ""}`}
              key={i}
              onClick={() => handleClick(i)}
            >
              <img
                src={data.value}
                alt={`Thumbnail ${i + 1}`}
                height="70"
                width="130"
                className={wordData.id === i ? "selected" : ""}
              />
            </div>
          ))}
        </div>
        <div className="main-slide">
          <div className="img">
            <img
              src={wordData.value}
              alt="Main Slide"
              height="500"
              width="600"
            />
          </div>
        </div>
        <div className="notes">
          <div className="notes-flex">
            <h3>Notes</h3>
            <button>Generate</button>
          </div>
          <div className="notes-input">
            <input
              type="text"
              placeholder="Your presentation notes"
              style={{ width: "250px", height: "474px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Custom;
