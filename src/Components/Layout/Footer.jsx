import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div>
              <h5>USEFUL LINKS</h5>
            </div>
            <ul className="list-unstyled" style={{ lineHeight: 3 }}>
              <li>HOME</li>
              <li>Registration</li>
              <li>Why Donate Blood</li>
              <li>Can you Donate</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div>
              <h5>CONTACT US</h5>
            </div>
            <p>
              231, vaikom Road, Near Thalook hospital Kottayam, Kerala, IN
              Contact: +91 7558 9513 51
            </p>
            {/* <ul className='list-unstyled' style={{lineHeight:3}}>
                        <li>HOME</li> 
                        <li>Registration</li>
                        <li>Why Donate Blood</li>
                        <li>Can you Donate</li>
                        <li>Contact Us</li>
                    </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
