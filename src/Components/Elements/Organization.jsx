import React from 'react'

function Organization() {
  return (
    <div className='organization' id='help'>
        <div className="container py-5">
            <div className="row justify-content-between">
                <div className="col-md-6">
                    <div className='position-relative'>
                    <div >
                    <img src="/Assets/help1.png" alt="help 1" className='img-fluid' />
                    </div>
                    <div>
                    <img src="/Assets/help2.png" alt="help 2"  className='help_over'/>
                    </div>
                    </div>
                </div>
                <div className="col-md-5 ">
                    <div className='help'>
                        <span>
                            Help the People in Need
                        </span>
                        
                        <div>
                        <h1>Welcome to Blood Donors Organization</h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. suspendisse the gravida. Risus commodo viverra maecenas</p>
                        </div>
                        <div className='d-flex gap-5'>
                            <div>
                                <ul>
                                    <li>Good Service </li>
                                    <li>Help People </li>
                                    <li>Hugin Tool </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>24th Service </li>
                                    <li>Health Check</li>
                                    <li>Blood Bank </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button className='btn'>Explore More</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Organization