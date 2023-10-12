import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
// import './Drag.scss'
const Drag = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isImported, setIsImported] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [SelectedDocUrl, setSelectedDocUrl] = useState("");
  const [showDoc, setShowDoc] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [val, setVal] = useState([]);
  const [file, setFile] = useState([]);

  const navigate = useNavigate();

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleSubmit = async (files) => {
    const formdata = new FormData();
    // data()
    formdata.append("file", files[0].file);
    const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST", formdata);
    console.log(apiResponse, "apiiiiiiiii");
    if (apiResponse.status === 200) {
      // let info=apiResponse.data.split(" ");
      toast.success(apiResponse.data.message + " ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(apiResponse.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    console.log(apiResponse);
  };

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

  // const handleFileSelect = (event) => {
  //   const files = event.target.files;
  //   // Handle the selected files, e.g., upload or process them.
  //   console.log("Selected files:", files);
  //   // Display the first selected file in the upload section
  //   if (files.length > 0) {
  //     setUploadedFile(files[0]);
  //   }
  // };

  const handleFileSelect = async (event) => {
    const files = event.target.files;
    setFile(files);
    console.log("Selected files:", files);
    const formdata = new FormData();
    // data()
    console.log(file, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    formdata.append("file", file[0]?.file);
    const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST", formdata);
    console.log(apiResponse, "apiiiiiiiii");
    // Display the first selected file in the upload section
    if (files.length > 0) {
      setIsLoading(true); // Start uploading
      // Simulate file upload process (replace setTimeout with actual upload process)
      setTimeout(() => {
        // After successful upload
        setIsLoading(false); // Uploading done
        setIsImported(true); // Mark as imported
      }, 1000); // Replace 2000 with actual upload time
    }
  };

  const handleRemoveFile = () => {
    // Remove the uploaded file
    setUploadedFile(null);
  };

  const handleUploadClick = async (event) => {
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

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const apiResponse1 = await callAPI(apiUrls.GETFILE, {}, "GET");
    console.log(apiResponse1);
    setVal(apiResponse1.data);
  }

  // function handleImage(image){
  // console.log(value)
  // const handleImageClick = (value) => {
  //   console.log(value)
  // }
  // }
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
            flexDirection: "row",
            gap: "2rem",
            marginTop: "10px",
          }}
        >
          <Link to="/presentation">
            {val.map((image, i) => (
              <div key={image.id}>
                <img
                  src={image}
                  name="image"
                  alt={`Im`}
                  // value={i+1}
                  // onClick={handleImageClick(image.value)}
                  style={{
                    width: "90%",
                    height: "120px",
                    borderRadius: "15px",
                  }}
                />
                <p>{i + 1}</p>
              </div>
            ))}
          </Link>
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
              // width: "520px",
              width: "40%",
              // height: "400px",
              minHeight: "70vh",
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
              <div className="imageContainer">
                {/* {val.map((image) => (
        <img key={image.id}
        src={image}
        alt={`Im`}
        // className="deck-image"
        style={{ width: '90%', height: '120px', borderRadius: "15px"}}
        />
      ))} */}

                {/* <Link to="/presentation" onClick={handleClick}>
            <img
              src= "https://source.unsplash.com/user/c_v_r/1900x800" 
              // src= {../../assets/img/about-us.jpg}
              alt="Deck Presentation 01"
              style={{
                width: "100% ", // Adjust the width of the image as needed
                height: "100px", // Adjust the height of the image as needed
                borderRadius: "5px", // Adjust the border radius as needed
              }}
            />
          </Link> */}
                {/* <h6 style={{ color: "gray" }}>Deck Presentation 01</h6> */}
              </div>

              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.google-apps.presentation"
              ></Dropzone>
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
