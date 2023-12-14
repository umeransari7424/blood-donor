import React from 'react'
import { useNavigate } from 'react-router-dom'

function Searchhero() {
    const navigate = useNavigate()
    const goHome=()=>{
        navigate('/')
    }
    return (
        <div className='registerhero'>
            <div className="container py-5">
                <div className="row  justify-content-center">
                    <div className='col-md-4 text-center'>
                        <h1>Donate Now</h1>
                    </div>
                    <div className='d-flex justify-content-center gap-3'>
                        <strong onClick={goHome}>Home</strong><strong>/</strong> <strong className='reg'>Search Donor</strong>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Searchhero