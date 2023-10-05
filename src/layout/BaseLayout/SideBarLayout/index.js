import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const SidebarLayout = (props) => {

  const size = {
    width: '261px', // Set the fixed width
    height: '90vh', // Set the fixed height to the full viewport height
    backgroundColor: '#353935', // Set the background color to black
    color: 'white', // Set the text color to white
  }

//   const { userDetail } = useSelector((state) => ({ userDetail: state?.userData?.loginUser }))

//   const userType = JSON.parse(localStorage.getItem("loginUser")).type



  return (<>
    <Header />
    {/* <SidebarNav/>
  {props.children} */}

    {/* <div className={` ${(userType == 'teacher') ? 'schedule schedule_teacher py-3' : "schedule  py-3"} `}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="schedule_date text-center">
              <i class="icofont-ui-calendar me-2"></i><span>Your next class schedule at 11:30am</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}



<section class="main_center_content" style={size}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex align-items-start">
              <div class="nav flex-column nav-pills me-3 left-sec">
                <div class="student_profile d-flex justify-content-center">
                  {/* <div class="position-relative"> */}
                    {/* <img src={userDetail?.Profile_Image} class="img-fluid" alt="" /> */}
                    {/* <Link to="/"><i class="icofont-home-alt-2 position-absolute top-0 end-0"></i></Link> */}
                 
                    {/* <h2 class="stud_name text-center mt-3 mb-0">{userDetail?.User_Name || userDetail?.First_Name}</h2>
                    <span class="stud_id d-block text-center">{userDetail?.student_id || userDetail?.teacher_id}</span> */}
                  {/* </div> */}
                </div>

                <ul class="nav nav-tabs flex-column border-bottom-0">
                  {/* <li class="nav-item">
                    <Link class="nav-link" to="/chapter">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span> Math (Year
                      1)
                    </Link>
                  </li> */}
                  {/* {(userType == 'teacher') ? <li class="nav-item">
                    <a class="nav-link mb-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span>Active Classes<i class="icofont-simple-down ms-3"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                      <ul class="collapse_links">
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Science (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Math (Year2)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year3)</a></li>
                      </ul>
                    </div>
                  </li> : <li class="nav-item">
                    <a class="nav-link mb-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span> Math (Year
                      1)<i class="icofont-simple-down ms-3"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                      <ul class="collapse_links">
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Science (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Math (Year2)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year3)</a></li>
                      </ul>
                    </div>
                  </li>}

 */}

<li class="nav-item">
                    <Link class="nav-link" to="/drag">
                      
                      <span class="d-inline-block me-2"><i class="icofont-chat i-cutom"></i></span> decks
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/presenters">
                      <span class="d-inline-block me-2"><i class="icofont-chat i-cutom"></i></span> Presenters
                    </Link>
                  </li>   
                  <li class="nav-item" style={{ marginTop: '18rem' }}>
                    <a class="nav-link" href="">
                      <span class="d-inline-block me-2"><i class="icofont-logout i-cutom"></i></span> Settings
                    </a>
                  </li>
                </ul>
              </div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>);
}

export default SidebarLayout;