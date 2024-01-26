import React from 'react'
import './StudentForm.css'

const StudentForm = () => {
  return (
    <form className="student-form">
        <div className="form-row">
            <label htmlFor="item">First Name</label>
            <input type="text" id="item" placeholder="Example Name"/>
        </div>
        <div className="form-row">
            <label htmlFor="item">Family Name</label>
            <input type="text" id="item" placeholder="Example Family Name"/>
        </div>
        <div className="form-row">
            <label htmlFor="item">Date of Birth</label>
            <input type="date" id="item" />
        </div>
        <button className="btn">Submit</button>
    </form>
  )
}

export default StudentForm