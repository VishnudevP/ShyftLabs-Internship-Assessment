import React from 'react'
import './StudentTable.css'

const StudentTable = ( {students} ) => {
  return (
    <div className="student-table-wrapper">
      <table>
        <thead>
            <tr className='d'>
            <th>First Name</th>
            <th>Family Name</th>
            <th>Date of Birth</th>
            </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
              <tr>
                <td className='no-students' colSpan="3">No Students</td>
              </tr>
            ) : (
              students.map((student) => (
                  <tr key={`${student.firstName}-${student.familyName}-${student.dob}`} className='s'>
                  <td>{student.firstName}</td>
                  <td>{student.familyName}</td>
                  <td>{student.dob}</td>
                  </tr>
              ))
           )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable