import React from 'react'
import './ResultTable.css'

const ResultTable = ( {results} ) => {
    
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
                {results.length === 0 ? (
                    <tr className='s'>
                        <td colSpan="3">No results available</td>
                    </tr>
                ) : (
                    results.map((result) => (
                        <tr key={`${result.courseName}-${result.studentName}-${result.score}`} className='s'>
                            <td>{result.courseName}</td>
                            <td>{result.studentName}</td>
                            <td>{result.score}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable