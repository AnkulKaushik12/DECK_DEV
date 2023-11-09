import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./presentation.scss";
import Tesseract from 'tesseract.js'

function Custom() {
  const data = useParams();
  console.log(data);
  let userId = 1;
  let deckId = 2;

  let imgs = [];
  for (var i = 0; i < 5; i++) {
    imgs.push({ id: i, value: `http://localhost:5001/uploads/${userId}/${deckId}/--${i}.jpg` });
  }

  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const [ocrResult, setOcrResult] = useState('');
  const [generating, setGenerating] = useState(false);

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

  const handleGenerate = async () => {
    if (wordData) {
      setGenerating(true);
  
      try {
        const response = await fetch(wordData.value);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const blob = await response.blob();
        const imageFile = new File([blob], "image.jpg", { type: "image/jpeg" });
  
        const worker = Tesseract.createWorker();
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
  
        const { data: { text } } = await worker.recognize(imageFile);
        setOcrResult(text);
  
        await worker.terminate();
        setGenerating(false);
      } catch (error) {
        console.error("Error fetching the image:", error);
        setGenerating(false);
      }
    }
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
            <button onClick={handleGenerate} disabled={generating}>
              Generate
            </button>
          </div>
          <div className="notes-input">
            <input
              type="text"
              value={ocrResult}
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
