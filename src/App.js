import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Registerdonor from "./Pages/Registerdonor";
import Donateblood from "./Pages/Donateblood";
import Search from "./Components/Elements/Search";
import Searchdonor from "./Pages/Searchdonor";
// import Voluntier from "./Components/Elements/Voluntier";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/register-here' element={<Registerdonor/>} />
          <Route path='/donate-here' element={<Donateblood/>} />
          <Route path='/search-here' element={<Searchdonor/>} />

        
        </Routes> 
      </Base>
    </BrowserRouter>
  );
}

export default App;
