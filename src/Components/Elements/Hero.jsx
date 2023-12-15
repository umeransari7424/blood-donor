import React from 'react'

function Hero() {
  return (
    <div className='hero' id='home'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 donate">
                    <div>
                    <h2>Donate Blood, Save Life</h2>
                    </div> 
                    <div>
                        <h1>Donate Blood And Save Life</h1>
                    </div>
                    <div className='mt-3'>
                        <a href="#search">
                        {/* <button className='btn btn-danger'> */}
                            Explore More
                            {/* </button> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero