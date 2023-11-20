import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Register from "./Components/Elements/Register";
import Donation from "./Components/Elements/Donation";
import Search from "./Components/Elements/Search";
import Appointment from "./Components/Elements/Appointment";
import Donorday from "./Components/Elements/Donorday";
import Requestappointment from "./Components/Elements/Requestappointment";
import DonationProcess from "./Components/Elements/Donationprocess";
import OurTeam from "./Components/Elements/OurTeam";
// import Voluntier from "./Components/Elements/Voluntier";

function App() {
  return (
    <BrowserRouter>
      <Base>
      <Search/>
      <Donorday/>
      <DonationProcess/>
      <OurTeam/>
      <Donation />
      <Register />
      {/* <Appointment/> */}
      <Requestappointment/>
      {/* <Voluntier/> */}
       
      </Base>
    </BrowserRouter>
  );
}

export default App;
