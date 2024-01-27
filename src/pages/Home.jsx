import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {

    const storedStudents = localStorage.getItem('students')
    const storedCourses = localStorage.getItem('courses')

    const students = storedStudents ? JSON.parse(storedStudents) : []
    const courses = storedCourses ? JSON.parse(storedCourses) : []

    setStudentCount(students.length);
    setCourseCount(courses.length);
  }, [])

  useEffect(() => {
    const funQuote = "INFINITY AND BEYOND 🚀"
    setDailyQuote(funQuote);
  }, [])

  return (
    
    <>
      <h1>Dashboard</h1>
      <h2 className='subhead'>Welcome to the project. Here you can see the overview of students, courses and a fun quote. </h2>

      <div className="box">
        <h2>Student Count</h2>
        <p className='p2'>{studentCount}</p>
      </div>

      <div className="box">
        <h2>Course Count</h2>
        <p className='p2'>{courseCount}</p>
      </div>

      <div className="box">
        <h2>Daily Quote</h2>
        <p className='quote'>{dailyQuote}</p>
      </div>
    </>

  )
}

export default Home
