import React from 'react'
import './ResultTable.css'

const ResultTable = () => {
  return (
    <div className="result-table-wrapper">
        <table>
            <thead>
                <tr className='d'>
                <th>Course Name</th>
                <th>Student Name</th>
                <th>Score</th>
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

export default ResultTable