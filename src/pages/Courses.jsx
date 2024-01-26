import React from 'react'
import CoursesForm from '../components/CoursesForm'
import CoursesTable from '../components/CoursesTable'


const Courses = () => {
  return (
    <section className="container">
        <h1>Courses</h1>
        <CoursesForm/>
        <CoursesTable/>
    </section>
  )
}

export default Courses