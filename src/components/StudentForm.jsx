import React, { useState } from 'react'
import './StudentForm.css'

const Notification = ({ message, onClose }) => (
  <div className="notification">
    <p>{message}</p>
    <button className="close-btn" onClick={onClose}>
      Close
    </button>
  </div>
);

const StudentForm = ( {onSubmit} ) => {
  const [firstName, setFirstName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [dob, setDob] = useState('')
  const [notification, setNotification] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!firstName || !familyName || !dob) {
      setNotification('Please fill in all fields')
      return
    }

    const dobDate = new Date(dob)
    if (isNaN(dobDate.getTime())) {
      setNotification('Please enter a valid date of birth')
      return
    }

    const tenMin = new Date();
    tenMin.setFullYear(tenMin.getFullYear() - 10)
    if (dobDate > tenMin) {
      setNotification('The student must be at least 10 years old')
      return
    }

    const newStudent = {
      firstName,
      familyName,
      dob,
    }

    onSubmit(newStudent);
    setNotification('New student added successfully!')

    setFirstName('')
    setFamilyName('')
    setDob('')
  }

  const closeNotification = () => {
    setNotification(null)
  }
  
  return (
   <>
    <form onSubmit={handleSubmit} className="student-form">
        <div className="form-row">
            <label htmlFor="firstName">First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" placeholder="Example Name"/>
        </div>
        <div className="form-row">
            <label htmlFor="familyName">Family Name</label>
            <input value={familyName} onChange={(e) => setFamilyName(e.target.value)} type="text" id="familyName" placeholder="Example Family Name"/>
        </div>
        <div className="form-row">
            <label htmlFor="dob">Date of Birth</label>
            <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" id="dob" />
        </div>
        <button className="btn">Submit</button>
    </form>
    {notification && <Notification message={notification} onClose={closeNotification} />}
  </>
  )
}

export default StudentForm