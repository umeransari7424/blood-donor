import React from 'react'
import Hero from '../Components/Elements/Hero'
import Registered from '../Components/Elements/Registered'
import Becomedonor from '../Components/Elements/Becomedonor'
import Organization from '../Components/Elements/Organization'
import What from '../Components/Elements/What'
import Phonenumber from '../Components/Elements/Phonenumber'
import OurTeam from '../Components/Elements/OurTeam'
import Register from '../Components/Elements/Register'
import Requestappoinment from '../Components/Elements/Requestappointment'

function Home() {
  return (
    <div>
        <Hero/>
        <Registered/>
        <Becomedonor/>
        <Organization/>
        <What/>
        <Phonenumber/>
        <OurTeam/>
        <Register/>
        <Requestappoinment/>
        
    </div>
  )
}

export default Home