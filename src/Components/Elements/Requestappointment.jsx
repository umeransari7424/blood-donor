import React from 'react'

function Requestappointment() {
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className='request' id='req-appointment'>
            <section className="section-appointment">
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 hidden-sm hidden-xs">
                            <figure className="appointment-img">
                                <img src="/Assets/appointment.jpg" alt="appointment image" className='img-fluid appoint-image' />
                            </figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-5">
                            <div class="card">
                                <div class="card-header text-center py-4">
                                    <h4>Request Appointment</h4>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3 d-flex gap-3">
                                        <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter First Name" />
                                        <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter Last Name" />
                                    </div>
                                    <div class="mb-3 d-flex gap-3">
                                        <input type="text" class="form-control p-3 " id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                        <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
                                    </div>
                                    <div class="mb-3 d-flex gap-3">
                                        <input type="date" class="form-control p-3" id="exampleFormControlInput1"  />
                                        <input type="time" class="form-control p-3" id="exampleFormControlInput1"  />
                                    </div>
                                  
                                    <div className='mb-3 '>
                                        <textarea name="text" class="form-control p-3"  rows="5" placeholder='Enter Description'></textarea>
                                    </div>     
                                    <div className='mb-3 text-center'>
                                        <button className='btn px-5 py-2'>Submit</button>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Requestappointment