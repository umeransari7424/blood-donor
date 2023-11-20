import React from 'react'
import { FaDroplet } from "react-icons/fa6";

function Header() {
  return (
    <div className="header">
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"> <FaDroplet size={30} color='#ff3447' /> DonateTheBlood</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Search</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Donate</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
       
        
       
       
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header