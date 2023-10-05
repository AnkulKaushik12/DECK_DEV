// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { apiUrls } from "../utils/apiUrls";
// import { callAPI } from "../utils/apiUtils";
// import "react-dropzone-uploader/dist/styles.css";
// import React, { useState, useEffect } from "react";

// import Dropzone from "react-dropzone-uploader";
// export default function UploadDocument() {
//   const [inputs, setInputs] = useState([]);
// const data = async()=>{
//   let apiResponse = await callAPI(apiUrls.GETFILE, {}, "GET");
//   console.log(apiResponse);
//   setInputs(apiResponse)
// }
// useEffect(()=>{
  
// },[])
//   // specify upload params and url for your files
//   const getUploadParams = ({ meta }) => {
//     return { url: "https://httpbin.org/post" };
//   };

//   // called every time a file's `status` changes
//   const handleChangeStatus = ({ meta, file }, status) => {
//     console.log(status, meta, file);
//   };

//   // receives array of files that are done uploading when submit button is clicked
//   const handleSubmit = async (files) => {
//     const formdata=new FormData();
//     data()
//     formdata.append('file',files[0].file)
//       const apiResponse = await callAPI(apiUrls.UPLOADFILE, {}, "POST",formdata);
//       if(apiResponse.status === 200){
// let info=apiResponse.data.split(" ");
//             toast.success(info[0]+" "+info[1], {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 });
//       }else{
        
//             toast.error(apiResponse.data, {
//                 position: "top-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 });
//       }
//       console.log(apiResponse);

//   };

//   return (
//     <>
//     <ToastContainer
// position="top-center"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="colored"
// />
// <div>
// {inputs?.length?inputs.map(item =>{
//   <textarea value={item.Key}></textarea>
// }):""}

// </div>
//     <Dropzone
//       getUploadParams={getUploadParams}
//       onChangeStatus={handleChangeStatus}
//       onSubmit={handleSubmit}
//      accept="application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.google-apps.presentation"
//     />
//     </>
//   );
// };

