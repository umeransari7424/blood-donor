import React from "react";
import {RiUserLocationFill} from 'react-icons/ri' 
import {HiMail} from 'react-icons/hi'
import {BiSolidPhone} from 'react-icons/bi'
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram , BsTwitter} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register-here')
}
const handleDonor = () => {
    navigate('/donate-here')
}
const searchDonor = () => {
    navigate('/search-here')
}
const handleHome = () => {
  navigate('/')
}
  return (
    <div className="footer" id="footer">
      <div className="container py-5">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 ">
            <div>
              <h3>
                Donate The Blood
              </h3>
            </div>
            <div className="py-3">
              <p> Our platform serves as a vital link between blood donors and those in need, creating a community-driven space where users can easily find information about donation centers, events, and urgent blood requests. Join us in the mission to make a positive impact on the world by contributing to the noble cause of saving lives through blood donation.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h5>USEFUL LINKS</h5>
            </div>
            <ul className="list-unstyled footer-list" style={{ lineHeight: 3,cursor:'pointer' ,fontWeight:"500" , textDecoration:'none'}}>
              <a href="#hero">
              <li onClick={handleHome}>HOME</li>
              </a>
              {/* <li onClick={handleRegister}>Registration As a Donor</li> */}
              <li onClick={handleDonor}>Donate The Blood</li>
              <a href="#req-appointment">
              <li >Get Appointment</li>
              </a>
              <li onClick={searchDonor}>Search the Donor</li>
            </ul>
          </div>
          <div className="col-md-3 text-start ">
            <h2>CONTACT</h2>
            <ul className="list-unstyled " style={{ lineHeight: 2.8 }}>
              <li><RiUserLocationFill size={"35px"} /> Bhawalpur</li>
              <li><BiSolidPhone size={"35px"}/> +92 1234567890</li>
              <li><HiMail size={'35px'}/>  bloodthedonate@gmail.comm</li> <br />
              <li className="d-flex gap-3"><FaFacebookF size={'35px'} color="white"/> <BsInstagram size={'35px'}/> <BsTwitter size={'35px'}/> <FaLinkedinIn size={'35px'}/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
