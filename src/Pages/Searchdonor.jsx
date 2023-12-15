import React, { useEffect } from 'react'
import Searchhero from '../Components/Elements/Searchhero'
import Search from '../Components/Elements/Search'

function Searchdonor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Searchhero/>
        <Search/>
    </div>
  )
}

export default Searchdonor