import React from 'react';
import './course.css'
import Html from '../../asset/logo/TechnologyLogo/html5.png';
import Css from '../../asset/logo/TechnologyLogo/css.png';
import Js from '../../asset/logo/TechnologyLogo/javascript.png'

function Course() {
  return (
    <div className='row  mb-0 p-2 gap-2 w-100 m-0'>

      <div className='course-card-container col text-center m-0'>
        <div className='course-logo-container my-2 p-1 d-flex align-items-center justify-content-center'>
          <img src={Html} alt="Html 5" className="img-fluid" width="100px" height="100px" />
        </div>
      </div>

      <div className='course-card-container col text-center m-0'>
        <div className='course-logo-container my-2 p-1 d-flex align-items-center justify-content-center'>
          <img src={Css} alt="Html 5" className="img-fluid" width="100px" height="100px" />
        </div>
      </div>

      <div className='course-card-container col text-center m-0'>
        <div className='course-logo-container my-2 p-1 d-flex align-items-center justify-content-center'>
          <img src={Js} alt="Html 5" className="img-fluid" width="100px" height="100px" />
        </div>
      </div>

      <div className='course-card-container col text-center m-0'>
        <div className='course-logo-container my-2 p-1 d-flex align-items-center justify-content-center'>
          <img src={Html} alt="Html 5" className="img-fluid" width="100px" height="100px" />
        </div>
      </div>

    </div>
  );
}

export default Course;
