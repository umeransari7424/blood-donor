import React from 'react'
import { FaDroplet } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Header() {
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
  return (
    <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand theblood" href="#"> <FaDroplet /> DonateTheBlood</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto  ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#help">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#volunteers">Volunteers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#req-appointment">ContactUs</a>
        </li>
     
       
      </ul>
      <div class="d-flex gap-3">
      <button class="btn " type="submit" onClick={handleRegister}>Register Now</button>
        <button class="btn " type="submit" onClick={handleDonor}>Donate Now</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header