import {React} from 'react'
import {useForm, useFieldArray} from 'react-hook-form'

const SalaryCalc = () => {
    const {register, handleSubmit,reset,control,formState:{errors}} = useForm({
        defaultValues:{
            basic_salary:"",
            earningFields:[{type:"",amount:"",epf:false}],
            deductionFields:[{type:"",amount:""}],
        }
    })
    

    const { fields:earningFields, append:appendEarning,remove:removeEarning } = useFieldArray({
        name: 'earningFields',
        control
      });

      const{fields:deductionFields,append:appendDeduction,remove:removeDeduction } = useFieldArray({
        name:'deductionFields',
        control
      })



   

      const onSubmit = (data) => console.log(data);


  return (
    <>
    <div className='w-1/2 bg-gray-200 flex flex-col p-8 border rounded-lg border-gray-400'>
    <form onSubmit={handleSubmit(onSubmit)}>

   
    <div className='flex justify-between mb-4'>
        <h1 className='font-semibold'>Calculate Your Salary</h1>
        <button type='reset' onClick={() => reset()} className='inline-block bg-indigo-500 border rounded-lg mr-4 tracking-wide px-4 py-2 hover:bg-indigo-600'>Reset</button>
    </div>
    <div className='flex flex-col mb-4'>
        <label htmlFor="" className='font-semibold mb-2'>Basic Salary</label>
        <input type="text" className='border rounded-lg bg-white h-10 w-1/2 px-4' {...register('basic_salary')}/>
    </div>
    <div className='mb-8'>
        <h1 className='font-semibold mb-2'>Earnings</h1>
        <p className='text-gray-500'>Allowances,Fixed Allowances,Bonus and etc.</p>
        <div>
        {earningFields.map((field, index) => (
          <div key={field.id} className="flex items-center mt-2 mb-2">
            <input
              type="text"
              {...register(`earningFields.${index}.type`)}
              defaultValue={field.type}
              className="mr-1 px-4 h-10 border rounded-lg w-1/4"
              placeholder='Pay Details (Title)'
            />
            <input
              type="text"
              {...register(`earningFields.${index}.amount`)}
              defaultValue={field.amount}
              
              className="mr-2 px-4 h-10 border rounded-lg w-1/4 "
              placeholder='Amount'
              
              
              
            />
            <label className="mr-4">
              <input
                type="checkbox"
                {...register(`earningFields.${index}.epf`)}
                defaultValue={field.epf}
                className='mr-2 '
                
              />
              EPF/ETF
            </label>
            {index > 0 && <button type="button" onClick={() => removeEarning(index)} className='bg-gray-300 rounded-full border px-4 py-2 hover:bg-gray-400'>✕</button>}
            
          </div>
        ))}
        <button onClick={() => appendEarning({type:"",amount:"",epf:false})} className='text-blue-600 hover:text-blue-800 mb-16'> + Add New Allowance</button>
        <hr className='h-0.5 bg-gray-400'></hr>
        </div>
        
    </div>
    


    <div>
        <h1 className='font-semibold mb-2'>Deductions</h1>
        <p className='text-gray-500'>Salary Advances,Loan Deductions and all.</p>
        <div>
        {deductionFields.map((field, index) => (
          <div key={field.id} className="flex items-center mt-2 mb-2">
            <input
              type="text"
              {...register(`deductionFields.${index}.type`)}
              defaultValue={field.type}
              className="mr-1 h-10 px-4 border rounded-lg w-1/4"
              placeholder='Charge Details (Title)'
            />
            <input
              type="text"
              {...register(`deductionFields.${index}.amount`)}
              defaultValue={field.amount}
              className="mr-2 h-10 px-4 border rounded-lg w-1/4 "
              placeholder='Amount'
              
            />
           {index > 0 &&             <button type="button" onClick={() => removeDeduction(index)} className='bg-gray-300  font-extrabold rounded-full border px-4 py-2 hover:bg-gray-400 '>✕</button>
          }
          </div>
        ))}
        <button onClick={() => appendDeduction({type:"",amount:"",epf:false})} className='text-blue-600 hover:text-blue-800 '> + Add New Deduction</button>
        </div>
    </div>

    </form>

    </div>
    

    </>
  )
}

export default SalaryCalc