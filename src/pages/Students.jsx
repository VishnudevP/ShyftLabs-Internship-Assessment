import React from 'react'
import './Students.css'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'

const Students = () => {
  return (
    <section className="container">
        <h1>Students</h1>
        <StudentForm/>
        <StudentTable/>
    </section>
  )
}

export default Students