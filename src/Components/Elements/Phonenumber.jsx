import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Phonenumber() {
  return (
    <div className='phonenumber'>
       <div className="phonenumber2">
       <div className="container py-5">
            <div className="row text-center ">
                <div className='call-content'>
                  <div>
                    <h4>Start Donating</h4>
                  </div>
                  <div>
                    <h1>Call Now : 0123456789</h1>
                  </div> <br />
                  <div className='d-flex gap-4 justify-content-center phone'>
                    <span> <FaLocationDot size={22}/> Bhalwalpur,Pakistan</span> <span> <CgMail size={30}/> Donate@gmail.com</span>
                  </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Phonenumber