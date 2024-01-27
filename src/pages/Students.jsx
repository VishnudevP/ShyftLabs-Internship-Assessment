import React, { useState } from 'react'
import './Students.css'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'

const Students = () => {
  const [students, setStudents] = useState([])
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  }

  return (
    <section className="container">
        <h1>Students</h1>
        <StudentForm onSubmit={addStudent} />
        <StudentTable students={students} />
    </section>
  )
}

export default Students