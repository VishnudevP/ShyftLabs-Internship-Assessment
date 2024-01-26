import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'
import Results from './pages/Results'
import './style.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/results' element={<Results/>}/>
    </Routes>
    </>
  )
}

export default App