import React, { useEffect } from 'react'
import Donorhero from '../Components/Elements/Donorhero'
import Donorform from '../Components/Elements/Donorform'

function Donateblood() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Donorhero/>
        <Donorform/>
    </div>
  )
}

export default Donateblood