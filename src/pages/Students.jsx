import React, { useState, useEffect } from 'react'
import './Students.css'
import StudentForm from '../components/StudentForm'
import StudentTable from '../components/StudentTable'

const Students = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const storedStudents = localStorage.getItem('students')
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents))
    }
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent])
    localStorage.setItem('students', JSON.stringify([...students, newStudent]))
  }

  const handleDeleteAll = () => {
    setStudents([]);
    localStorage.removeItem('students');
  };

  return (
    <section className="container">
        <h1>Students</h1>
        <StudentForm onSubmit={addStudent} />
        <StudentTable students={students} />
        <button onClick={handleDeleteAll} className="delete-all">
        Delete All Students
        </button>
    </section>
  )
}

export default Students