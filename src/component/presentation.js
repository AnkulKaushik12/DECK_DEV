import React, { useEffect, useState } from "react";
import "./presentation.scss";

function Custom() {
  const imgs = [
    { id: 0, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 1, value: "https://source.unsplash.com/user/c_v_r/100x100" },
    { id: 2, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 3, value: "https://source.unsplash.com/user/c_v_r/100x100" },
    { id: 4, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 5, value: "https://source.unsplash.com/user/c_v_r/100x100" },
    { id: 6, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 7, value: "https://source.unsplash.com/user/c_v_r/100x100" },
    { id: 8, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
  ];

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
