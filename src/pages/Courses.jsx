import React, { useState, useEffect } from 'react'
import CoursesForm from '../components/CoursesForm'
import CoursesTable from '../components/CoursesTable'
import './Courses.css'


const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const storedCourses = localStorage.getItem('courses')
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses))
    }
  }, []);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse])

    localStorage.setItem('courses', JSON.stringify([...courses, newCourse]))
  };

  const handleDeleteAll = () => {
    setCourses([]);
    localStorage.removeItem('courses')
  }

  return (
    <section className="container">
        <h1>Courses</h1>
        <CoursesForm onSubmit={addCourse} />
        <CoursesTable courses={courses} />
        <button onClick={handleDeleteAll} className="courses-delete-all">
        Delete All Courses
        </button>
    </section>
  )
}

export default Courses