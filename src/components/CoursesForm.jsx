import React, { useState } from 'react'
import './CoursesForm.css'

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <p>{message}</p>
    <button className="close-btn" onClick={onClose}>
      Close
    </button>
  </div>
);

const CoursesForm = ( {onSubmit} ) => {
  const [courseName, setCourseName] = useState('')
  const [notification, setNotification] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!courseName) {
      setNotification('Please fill in the course name');
      return
    }

    const newCourse = {
      courseName,
    };

    onSubmit(newCourse);

    setCourseName('')
  };

  const closeNotification = () => {
    setNotification(null)
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
            <label htmlFor="courseName">Course Name</label>
            <input value={courseName} onChange={(e) => setCourseName(e.target.value)} type="text" id="courseName" placeholder="Example Course Name"/>
        </div>
        <button className="course-btn">Submit</button>
    </form>
    {notification && <Notification message={notification} onClose={closeNotification} />}
    </>

  )
}

export default CoursesForm