import React from 'react'
import './ResultForm.css'

const ResultForm = () => {
  return (
    <form className="result-form">
        <div className="form-row">
            <label htmlFor="item">First Name</label>
            <select id="name">
                <option value="default1">-- Select Option --</option>
            </select>
        </div>
        <div className="form-row">
            <label htmlFor="item">Family Name</label>
            <select id="course">
                <option value="default2">-- Select Option --</option>
            </select>
        </div>
        <div className="form-row">
            <label htmlFor="item">Date of Birth</label>
            <select id="grades">
                <option value="default3">-- Select Option --</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
            </select>
        </div>
        <button className="btn">Submit</button>
    </form>
  )
}

export default ResultForm