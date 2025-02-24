import React from 'react'
import './jobPost.css'
import { useFormik } from 'formik'
import { SchemaThree } from '../Schema/yup'

function JobPost3() {

const onSubmit = (value)=>{
  console.log(value)
}

  const {touched,errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
        currency:"",
        description:"",
    },
    validationSchema: SchemaThree,
    onSubmit,
  });
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center z-[-1] bg-white'>
      <form onSubmit={handleSubmit} className='border-1 w-[550px] h-[80vh] form'>
        <p className='text-center'>Job Posting</p>
        <div className='flex flex-col gap-5'>
          <label className='block relative'>currency: <br />
            <input
            value={values.currency} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='your text' 
            name='currency'
            className='inp-tex border-1 w-[80%]' type="text" />
            <p className='text-red-500 absolute right-0'>{touched.currency && errors.currency?errors.currency:""}</p>
          </label>
          <label className='block relative'>description: <br />
            <textarea
            value={values.description} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='description'
            className='inp-tex border-1 w-[80%] h-[15vh]' type="text"></textarea>
            <p className='text-red-500 absolute right-0'>{touched.description && errors.description?errors.description:""}</p>
          </label>
        </div>
        <div className='text-end relative top-[100px]'>
          <button type='submit' className='border-1'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default JobPost3
