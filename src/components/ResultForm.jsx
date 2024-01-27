import React, { useState } from 'react'
import './ResultForm.css'

const Notification = ({ message, onClose }) => (
    <div className="notification">
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );

const ResultForm = ( { students, courses, onSubmit } ) => {
    const [courseName, setCourseName] = useState('default1')
    const [studentName, setStudentName] = useState('default2')
    const [score, setScore] = useState('default3')
    const [notification, setNotification] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (courseName === 'default1' || studentName === 'default2' || score === 'default3') {
            setNotification('Please fill in all fields')
          return;
        }
    
        const newResult = {
          courseName,
          studentName,
          score,
        };
    
        onSubmit(newResult)
    
        setCourseName('default1')
        setStudentName('default2')
        setScore('default3')
      }

      const closeNotification = () => {
        setNotification(null)
      }
    
  return (
    <>
        <form onSubmit={handleSubmit} className="result-form">
            <div className="form-row">
                <label htmlFor="courseName">Course Name</label>
                <select id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)}>
                    <option value="default1">-- Select Option --</option>
                    {courses && courses.map((course) => (
                        <option key={course.courseName} value={course.courseName}>
                            {course.courseName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="studentName">Student Name</label>
                <select id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)}>
                    <option value="default2">-- Select Option --</option>
                    {students && students.map((student) => (
                        <option key={student.firstName + ' ' + student.familyName} value={student.firstName + ' ' + student.familyName}>
                            {student.firstName} {student.familyName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-row">
                <label htmlFor="item">Score</label>
                <select id="score" value={score} onChange={(e) => setScore(e.target.value)}>
                    <option value="default3">-- Select Option --</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
            </div>
            <button className="btn">Submit</button>
        </form>
        {notification && <Notification message={notification} onClose={closeNotification} />}
    </>
  )
}

export default ResultForm