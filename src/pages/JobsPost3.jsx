import React, { useEffect, useState } from 'react'
import './jobPost.css'
import { useFormik } from 'formik'
import { SchemaThree } from '../Schema/yup'
import { ManageData, useDataForPost } from '../constants/Store'
import { PostJob } from '../constants/SendRequist'

function JobPost3() {

//  const jobb =  
//     {
//       "_id": "67b898e8202992ab61d5871a",
//       "title": "Software Engineer",
//       "type": "Full-time",
//       "salary": 95000,
//       "description": "Develop and maintain web applications.",
//       "company": "Google",
//       "logo": "https://logo.clearbit.com/google.com",
//       "id": "jy78uoffr",
//       "isBookMarked": true,
//       "location": "San Francisco, USA",
//       "experienceLevel": "Mid Level",
//       "currency": "USD",
//       "createdAt": "2025-02-21T15:16:56.623Z",
//       "updatedAt": "2025-02-21T15:16:56.623Z",
//       "__v": 0
//     }

    

    const jobb =  
   
    {
      "title": "Software Engineer",
      "type": "Full-time",
      "salary": 95000,
      "description": "Ddfsdfsdfsevelop and maintain web applications.",
      "company": "ET-market",
      "logo": "https://logo.clearbit.com/google.com",
      "isBookMarked": false,
      "location": "Adama,Ethiopia",
      "experienceLevel": "Mid Level",
      "currency": "USD"
    }
const onSubmit = (value)=>{
  setItemInfo(value)
  PostJob(itemInfo)
  console.log(itemInfo)
}


const {setTempInfo,tempInfo,itemInfo,setItemInfo} = useDataForPost();
  const {touched,errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      currency:"",
      description:"",
    },
    validationSchema: SchemaThree,
    onSubmit,
  });
  console.log(itemInfo)
  console.log(jobb)
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
        <div className='relative top-[100px] flex justify-between'>
          <button type='' className='border-1'>Back</button>
          <button type='submit' className='border-1'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default JobPost3
