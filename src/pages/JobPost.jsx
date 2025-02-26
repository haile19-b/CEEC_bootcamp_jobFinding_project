import React from 'react'
import './jobPost.css'
import { useFormik } from 'formik'
import { SchemaOne } from '../Schema/yup'
import { useNavigate } from 'react-router-dom'
import { ManageData, useDataForPost } from '../constants/Store'

function JobPost() {

const onSubmit = (value)=>{
  setItemInfo(value)
    next('/job-post')
}

 const next = useNavigate();

 const {setItemInfo,tempInfo,itemInfo,setTempInfo} = useDataForPost();

  const {touched,errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      title:"",
      type:"",
      salary:"",
      company:"",
    },
    validationSchema: SchemaOne,
    onSubmit,
  });
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center z-[-1] bg-white'>
      <form onSubmit={handleSubmit} className='border-1 w-[550px] h-[80vh] form'>
        <p className='text-center'>Job Posting</p>
        <div className='flex flex-col gap-5'>
          <label className='block relative'>title: <br />
            <input
            value={values.title} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='your text' 
            name='title'
            className='inp-tex border-1 w-[80%]' type="text" />
            <p className='text-red-500 absolute right-0'>{touched.title && errors.title?errors.title:""}</p>
          </label>
          <label className='block relative'>type: <br />
            <input
            value={values.type} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='type'
            className='inp-tex border-1 w-[80%]' type="text" />
            <p className='text-red-500 absolute right-0'>{touched.type && errors.type?errors.type:""}</p>
          </label>
          <label className='block relative'>salary: <br />
            <input
            value={values.salary} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='salary'
            className='inp-tex border-1 w-[80%]' 
            type="number" />
            <p className='text-red-500 absolute right-0'>{touched.salary && errors.salary?errors.salary:""}</p>
          </label>
          <label className='block relative'>company: <br />
            <input
            value={values.company} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='company'
            className='inp-tex border-1 w-[80%]'  type="text" />
            <p className='text-red-500 absolute right-0'>{touched.company && errors.company?errors.company:""}</p>
          </label>
        </div>
        <div className='text-end relative top-[100px]'>
          <button type='submit' className='border-1'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default JobPost
