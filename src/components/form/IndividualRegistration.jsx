import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Constant style for h5 elements
const h5Style = {
  background: "linear-gradient(rgba(2,0,36,1), rgba(29,9,121,0.88) 0%, rgba(0,212,255,0.8) 110%)",
  py: '3',
  px: '4',
  rounded: '1',
  textLight: 'text-light',
  
};

function IndividualRegistration() {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="p-2" style={{ backgroundColor: '#FAFAFA' }}>
      <form className="container-fluid d-flex flex-column justify-content-around rounded-1 " onSubmit={handleSubmit}>
        {/* Header */}
        {/* <div className="p-2 d-flex justify-content-between align-items-center"> */}
    

        {/* Personal Details Section */}
        <h5 style={h5Style} className={`py-${h5Style.py} px-${h5Style.px} rounded-${h5Style.rounded} ${h5Style.textLight}`}>Personal Details</h5>
        <div className="row p-0 my-3 gap-2">
  <div className="col-md-3">
    <input type="text" className="form-control" placeholder="First Name" required />
  </div>

  <div className="col-md-3">
    <input type="text" className="form-control" placeholder="Middle Name" required />
  </div>

  <div className="col-md-3">
    <input type="text" className="form-control" placeholder="Last Name" required />
  </div>
</div>

<div className="row p-0 my-3 gap-2">
  <div className="col-md-2">
    <DatePicker className="form-control m-0" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Date of Birth" style={{ width: '100%' }} />
  </div>

  <div className="col-md-3">
    <input type="text" className="form-control" placeholder="Age as on Date of Registration" required />
  </div>

  <div className="col-md-3">
    <input
      type="text"
      className="form-control"
      placeholder="Aadhaar Card"
      required
    />
  </div>
</div>



        {/* Address Details Section */}
        <h5 style={h5Style} className={`py-${h5Style.py} px-${h5Style.px} rounded-${h5Style.rounded} ${h5Style.textLight}`}>Address Details</h5>
      <div className="row p-0 my-3 gap-2">
  <div className="col-md-2">
    <input type="text" className="form-control" placeholder="Pincode" required />
  </div>

  <div className="col-md-3">
  <input className="form-control"  placeholder="Gadchiroli" required />
</div>


  <div className="col-md-3">
    <select className="form-select" required>
      <option value="">Select Taluka</option>
      <option value="taluka1">Taluka 1</option>
      <option value="taluka2">Taluka 2</option>
      <option value="taluka3">Taluka 3</option>
    </select>
  </div>

  <div className="col-md-3">
    <select className="form-select" required>
      <option value="">Select your Block</option>
      <option value="panchayat1">Panchayat 1</option>
      <option value="panchayat2">Panchayat 2</option>
      <option value="panchayat3">Panchayat 3</option>
    </select>
  </div>
</div>

<div className="row p-0 my-3 gap-2">
  <div className="col-md-2">
    <select className="form-select" required>
      <option value="">Select Village</option>
      <option value="village1">Village 1</option>
      <option value="village2">Village 2</option>
      <option value="village3">Village 3</option>
    </select>
  </div>

</div>

        {/* Contact Details Section */}
        <h5 style={h5Style} className={`py-${h5Style.py} px-${h5Style.px} rounded-${h5Style.rounded} ${h5Style.textLight}`}>Contact Details</h5>
      <div className="row p-0 my-3 gap-2">
      {/* First input field */}
    <div className="col-md-2">
        <input type="text" className="form-control" placeholder="Mobile Number"  required/>
    </div>
        {/* Second input field */}
        <div className="col-md-2">
        <input type="text" className="form-control" placeholder="Alternate Mobile Number"  required/>
    </div>

    {/* Third input field */}
    <div className="col-md-3">
        <input type="email" className="form-control" placeholder="Email ID" required/>
    </div>
    </div>

        {/* Scheme Details Section */}
        <h5 style={h5Style} className={`py-${h5Style.py} px-${h5Style.px} rounded-${h5Style.rounded} ${h5Style.textLight}`}>Interested For Course</h5>
        <div className="row p-0 my-3 gap-2">
    {/* First input field */}
    <div className="col-md-2">
  <select className="form-select" required>
    <option value="">Select Course Type</option>
    <option value="option1">Department 1</option>
    <option value="option2">Department 2</option>
    <option value="option3">Department 3</option>
  </select>
</div>


    {/* Second input field */}
    <div className="col-md-3">
  <select className="form-select" required>
    <option value="">Select Course Duration</option>
    <option value="scheme1">Scheme 1</option>
    <option value="scheme2">Scheme 2</option>
    <option value="scheme3">Scheme 3</option>
  </select>
</div>
</div>

        {/* Action Buttons */}
        <div className="form-group text-end">
          <button type="submit" className="btn btn-lg btn-success my-3 col-6 col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default IndividualRegistration;
