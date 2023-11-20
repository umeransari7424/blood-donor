import React from "react";

function Appointment() {
  return (
    <div>
      <div className="text-center mt-5 mx-5 mb-4 getappointment">REQUEST APPOINTMENT</div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-5">
              <input
                className="inputfield"
                type="text"
                placeholder="First name"
              />
            </div>
            <div className="mt-5">
              <input className="inputfield" type="text" placeholder="E-mail" />
            </div>
            <div className="mt-5">
              <input className="inputfield" type="date" placeholder="E-mail" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-5">
              <input
                className="inputfield"
                type="text"
                placeholder="Last name"
              />
            </div>
            <div className="mt-5">
              <input
                className="inputfield"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <div className="mt-5">
              <input className="inputfield" type="time" placeholder="First " />
            </div>
          </div>
        </div>
        <div className=" mt-5 ">
          <textarea
            className="textarea"
            // name=""
            placeholder="Message"
            // id=""
            cols="65"
            rows="5"
          ></textarea>
        </div>
        
      </div>
      <div className="text-center getappointment my-5 mx-5">
                 GET APPOINTMENT
        </div>
    </div>
    
  );
}

export default Appointment;