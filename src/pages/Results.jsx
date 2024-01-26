import React from 'react'
import ResultForm from '../components/ResultForm'
import ResultTable from '../components/ResultTable'

const Results = () => {
  return (
    <section className="container">
      <h1>Results</h1>
      <ResultForm/>
      <ResultTable/>
    </section>
  )
}

export default Results