import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Donorform() {
    return (
        <div className='registerdform'>
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-10  py-5">
                        <div className="card">
                            <div className="card-header text-center py-4">
                                <h4>Make A Donation</h4>
                            </div>
                            <div className="card-body ">
                                <div className='d-flex gap-4'>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder='Enter Your First Name'/>
                                </div>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder='Enter Your Last Name'/>
                                </div>
                                </div>
                                <div className='d-flex gap-4'>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Email'/>
                                </div>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" />
                                </div>
                                </div>
                                <div className='d-flex gap-4'>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Blood Group</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Blood Group</option>
                                        <option value="1">A+</option>
                                        <option value="2">B+</option>
                                        <option value="3">AB-</option>
                                        <option value="4">AB+</option>
                                        <option value="5">O+</option>
                                        <option value="6">O-</option>
                                    </select>
                                </div>
                                <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Last Date of Donation</label>
                                    <input type="date" className="form-control" />
                                </div>
                                
                                </div>
                               <div className='d-flex gap-4'>
                               <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" placeholder='Enter Your Phone Number' />
                                </div>
                               <div className="mb-3 w-100">
                                    <label for="exampleInputEmail1" className="form-label">City</label>
                                    <input type="text" className="form-control" placeholder='Enter Your Address'/>
                                </div>
                                
                               </div>
                               <div className='text-center'>
                                    <button className='btn btn-danger px-4 py-2'><strong>Donate Now</strong></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donorform