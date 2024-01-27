import React from 'react'
import './CoursesTable.css'

const CoursesTable = ( {courses} ) => {
  return (
    <div className="contact-table-wrapper">
        <table>
          <thead>
              <tr className='d'>
              <th>Course Name</th>
              </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td className='no-courses'>No courses available</td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course.courseName} className='s'>
                <td>{course.courseName}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
    </div>
  )
}

export default CoursesTable