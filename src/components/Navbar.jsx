import React from 'react'
import Logo from '../assets/logo.svg'
import homeicon from '../assets/home.svg'
import bookicon from '../assets/book.svg'
import usericon from '../assets/users.svg'
import charticon from '../assets/bar-chart.svg'
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
        <img src={Logo} className="logo" alt="Logo" />
        <ul>
            <li>
            <NavLink to="/"><img src={homeicon} alt="homeicon" className="icon" />Home</NavLink>
            </li>
            <li>
            <NavLink to="students"><img src={usericon} alt="usericon" className="icon" />Students</NavLink>
            </li>
            <li>
            <NavLink to="courses"><img src={bookicon} alt="bookicon" className="icon" />Courses</NavLink>
            </li>
            <li>
            <NavLink to="results"><img src={charticon} alt="charticon" className="icon" />Results</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar