import React from 'react'
import StudentNavbar from './StudentNavbar'

const AddStudent = () => {
  return (
    <div>
    <StudentNavbar/>

       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">roll no</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">admission no</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">college</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
        
        
        </div>
  )
}

export default AddStudent