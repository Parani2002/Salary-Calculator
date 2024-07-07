import React from 'react'

import './App.css'
import SalaryCalc from './components/SalaryCalc'
import SalaryDisp from './components/SalaryDisp'

function App() {
 

  return (
    <>
    <div className='flex flex-col md:flex-col lg:flex-row p-8 justify-center'>
    <SalaryCalc />
    <SalaryDisp />
    </div>
    
    </>
  )
}

export default App
