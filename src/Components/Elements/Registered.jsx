import React from 'react'
import { BsBoxArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Registered() {
    const navigate = useNavigate()
    // const handleRegister = () => {
    //     navigate('/register-here')
    // }
    const handleDonor = () => {
        navigate('/donate-here')
    }
    const searchDonor = () => {
        navigate('/search-here')
    }

    return (
        <div className='registered' id='search'>
            <div className="container pt-5">
                <div className="row py-5 justify-content-center">
                    <div className="col-md-6 my-2 ">
                        <div className="card card1 p-3">
                        <div className='d-flex gap-5'>
                                <div >
                                    <div>
                                        <h3>Search Donor Now</h3>
                                    </div> <br />
                                    <div>
                                        <h5>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <BsBoxArrowRight size={45} color='white' onClick={searchDonor} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <div className="card card1 p-3">
                            <div className='d-flex gap-5'>
                                <div >
                                    <div>
                                        <h3>Donate Now</h3>
                                    </div> <br />
                                    <div>
                                        <h5>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <BsBoxArrowRight size={45} color='white'  onClick={handleDonor}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='row justify-content-center'>
                <div className="col-md-6 ">
                        <div className="card card2 p-3">
                            <div className='d-flex gap-5'>
                                <div >
                                    <div>
                                        <h3>Search Donor Now</h3>
                                    </div> <br />
                                    <div>
                                        <h5>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</h5>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <BsBoxArrowRight size={45} color='white' onClick={searchDonor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Registered