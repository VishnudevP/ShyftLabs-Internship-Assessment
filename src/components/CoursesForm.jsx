import React from 'react'
import './CoursesForm.css'

const CoursesForm = () => {
  return (
    <form className="contact-form">
        <div className="form-row">
            <label htmlFor="item">Course Name</label>
            <input type="text" id="item" placeholder="Example Course Name"/>
        </div>
        <button className="btn">Submit</button>
    </form>
  )
}

export default CoursesForm