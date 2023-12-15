import React, { useEffect } from 'react'
import Registerhero from '../Components/Elements/Registerhero'
import Registeredform from '../Components/Elements/Registeredform'

function Registerdonor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Registerhero/>
        <Registeredform/>
    </div>
  )
}

export default Registerdonor