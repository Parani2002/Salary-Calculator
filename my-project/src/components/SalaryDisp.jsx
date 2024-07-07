import React from 'react'

const SalaryDisp = () => {
  return (
    <div className='bg-gray-200 border rounded-lg ml-8 p-8 w-1/3 border-gray-400'>
        <h1 className='font-bold mb-8'>Your Salary</h1>
        <div className='flex justify-between text-gray-500 mb-4'>
            <p>Items</p>
            <p>Amount</p>
        </div>
        <div className='flex justify-between mb-2 '>
            <p>Basic Salary</p>
            <p>200,000.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>Gross Earning</p>
            <p>23,000.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>Gross Deduction</p>
            <p>-45,000.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>Employee EPF(8%)</p>
            <p>-12,160.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>APIIT</p>
            <p>-3,740.00</p>
        </div>

        <div className='flex justify-between border border-gray-300 rounded-lg font-extrabold p-4 mb-4 mt-4'>
            <p>Net Salary (Take Home)</p>
            <p>136,100.00</p>
        </div>
        <p className='text-gray-500 mb-2'>Contribution from the Employer</p>
        <div className='flex justify-between mb-2'>
            <p>Employer EPF (12%)</p>
            <p>12,240.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>Employer ETF (8%)</p>
            <p>4,560.00</p>
        </div>
        <div className='flex justify-between mb-2'>
            <p>CTC (Cost To Company)</p>
            <p>174,800.00</p>

        </div>

    </div>
  )
}

export default SalaryDisp