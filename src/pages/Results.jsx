import React, { useState, useEffect } from 'react'
import ResultForm from '../components/ResultForm'
import ResultTable from '../components/ResultTable'
import './Results.css'

const Results = () => {
  const [results, setResults] = useState([])
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    const storedCourses = localStorage.getItem('courses');
    const storedResults = localStorage.getItem('results');

    setStudents(storedStudents ? JSON.parse(storedStudents) : []);
    setCourses(storedCourses ? JSON.parse(storedCourses) : []);
    setResults(storedResults ? JSON.parse(storedResults) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('courses', JSON.stringify(courses));
    localStorage.setItem('results', JSON.stringify(results));
  }, [students, courses, results]);

  const addResult = (newResult) => {
      setResults([...results, newResult]);
  };

  const handleDeleteAll = () => {
    setResults([]);
    localStorage.removeItem('results');
  };

  return (
    <section className="container">
      <h1>Results</h1>
      <ResultForm students={students} courses={courses} onSubmit={addResult}  />
      <ResultTable results={results} />
      <button className="result-delete-all" onClick={handleDeleteAll}>
        Delete All Results
      </button>
    </section>
  )
}

export default Results