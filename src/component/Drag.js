import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Drag = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isImported, setIsImported] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedDocUrl, setSelectedDocUrl] = useState("");
  const [showDoc, setShowDoc] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoading(false); // Reset loading state
    setIsImported(false); // Reset imported state
    setUploadedFile(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    // Handle the dropped files, e.g., upload or process them.
    console.log("Dropped files:", files);
    // Display the first dropped file in the upload section
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    // Handle the selected files, e.g., upload or process them.
    console.log("Selected files:", files);
    // Display the first selected file in the upload section
    if (files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    // Remove the uploaded file
    setUploadedFile(null);
  };

  const handleUploadClick = () => {
    // Trigger the file input click event
    document.getElementById("file-input").click();
  };

  const handleFetchDoc = () => {
    // Check if the input URL is not empty
    if (inputUrl) {
      setIsLoading(true); // Start loading
      // Simulate loading process (replace setTimeout with actual import process)
      setTimeout(() => {
        setSelectedDocUrl(inputUrl);
        setShowDoc(true);
        setIsImported(true); // Mark as imported
        setIsLoading(false); // Loading done
      }, 2000); // Replace 2000 with actual loading time
    }
  };

  const handleClick = () => {
    // Navigate to the PresentationDetail component
    navigate("/presentation");
  };

  return (
    <>
      <div className="container">
        <div
          className="drag-container"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <div>
            <h2
              style={{
                color: "black",
              }}
            >
              Decks
            </h2>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              style={{
                border: "1px dotted #000",
                borderRadius: "8px",
                padding: "1px",
                textAlign: "center",
                width: "5.9rem",
                height: "2.5rem",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <h6>Add New</h6>
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            marginTop: "10px",
          }}
        >
          <Link to="/presentation" onClick={handleClick}>
            <img
              src={require("../assets/img/deck.jpg")}
              // src= {../../assets/img/about-us.jpg}
              alt="Deck Presentation 01"
              style={{
                width: "100% ", // Adjust the width of the image as needed
                height: "100px", // Adjust the height of the image as needed
                borderRadius: "5px", // Adjust the border radius as needed
              }}
            />
          </Link>
          <h6 style={{ color: "gray" }}>Deck Presentation 01</h6>
        </div>

        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
              padding: "16px",
              borderRadius: "10px",
              width: "520px",
              height: "400px",
            }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()} // Prevent default to allow drop
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "black" }}>Add New Deck</span>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  height: "1rem",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {uploadedFile ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{
                      border: "1px solid #000",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {uploadedFile.name}
                  </button>
                  <button
                    style={{
                      border: "1px solid #000",
                      padding: "12px",
                      textAlign: "center",
                      marginLeft: "8px",
                    }}
                    onClick={handleRemoveFile}
                  >
                    X
                  </button>
                </div>
              ) : (
                <button
                  style={{
                    border: "1px solid #000",
                    // backgroundColor: "white",
                    color: "black",
                    borderRadius: "5px",
                    color: "black",
                    padding: "12px",
                    textAlign: "center",
                  }}
                  onClick={handleUploadClick}
                >
                  Upload
                </button>
              )}
              {/* Hidden file input */}
              <input
                type="file"
                accept=".pdf, .ppt, .pptx"
                style={{ display: "none" }}
                id="file-input"
                onChange={handleFileSelect}
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
            >
              or
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                color: "black",
              }}
            >
              Import from Google Slides
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Google Slides URL"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "80%",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => handleFetchDoc()}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "12px",
                  width: "80%",
                }}
              >
                Import
              </button>
            </div>
          </div>
        )}

        {/* Loading Modal */}
        {isLoading && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
              padding: "16px",
              borderRadius: "10px",
              width: "520px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h6 style={{ textAlign: "center", color: "black" }}>
              Importing...
            </h6>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <progress
                style={{
                  width: "80%",
                  height: "45px",
                }}
                max="100"
                value="60" // Set the value dynamically based on the progress
              ></progress>
            </div>
            <button
              style={{
                marginTop: "1rem",
                border: "1px solid #000",
                padding: "12px",
                borderRadius: "5px",
                backgroundColor: "black",
                color: "white",
                // width: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        )}

        {/* Imported Modal */}
        {isImported && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
              padding: "16px",
              borderRadius: "10px",
              width: "520px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h6 style={{ color: "black" }}>Deck Imported</h6>
            <div
              style={{
                display: "flex",
                flexDirection: "column", // Display buttons in a column
                alignItems: "center", // Center buttons horizontally
                marginTop: "1rem",
              }}
            >
              <button
                style={{
                  border: "1px solid #000",
                  padding: "12px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                  marginBottom: "1rem", // Add margin to separate buttons
                }}
                onClick={() => {
                  // Handle opening the deck
                }}
              >
                Open Deck
              </button>
              <button
                style={{
                  border: "1px solid #000",
                  padding: "12px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                }}
                onClick={handleCloseModal}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drag;
