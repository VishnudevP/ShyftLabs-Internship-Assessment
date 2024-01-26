import React from 'react'
import './StudentTable.css'

const StudentTable = () => {
  return (
    <div class="student-table-wrapper">
      <table>
        <thead>
            <tr className='d'>
            <th>First Name</th>
            <th>Family Name</th>
            <th>Date of Birth</th>
            </tr>
        </thead>
        <tbody>
            <tr className='s'>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
        </tbody>
        <tbody>
            <tr className='s'>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable