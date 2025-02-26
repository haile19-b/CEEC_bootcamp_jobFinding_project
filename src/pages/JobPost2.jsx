import React from 'react'
import './jobPost.css'
import { useFormik } from 'formik'
import { SchemaTwo } from '../Schema/yup'
import { useNavigate } from 'react-router-dom'
import { ManageData, useDataForPost } from '../constants/Store'

function JobPost2() {

    const next = useNavigate();
const onSubmit = (value)=>{
  setItemInfo(value)
  next('/job post')
}
 const {setItemInfo,itemInfo,tempInfo,setTempInfo} = useDataForPost();

  const {touched,errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      logo:"",
      isBookMarked:true,
      location: "",
      experienceLevel: "",
    },
    validationSchema: SchemaTwo,
    onSubmit,
  });
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center z-[-1] bg-white'>
      <form onSubmit={handleSubmit} className='border-1 w-[550px] h-[80vh] form'>
        <p className='text-center'>Job Posting</p>
        <div className='flex flex-col gap-5'>
          <label className='block relative'>Logo: <br />
            <input
            value={values.logo} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='your text' 
            name='logo'
            className='inp-tex border-1 w-[80%]' type="text" />
            <p className='text-red-500 absolute right-0'>{touched.logo && errors.logo?errors.logo:""}</p>
          </label>
          <label className='block relative'>isBookmarked: <br />
            <input
            value={values.isBookMarked} 
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='your text' 
            name='isBookMarked'
            className='inp-tex border-1 w-[80%]'
            type="text" />
            <p className='text-red-500 absolute right-0'>{touched.isBookMarked && errors.isBookMarked?errors.isBookMarked:""}</p>
          </label>
          <label className='block relative'>Location: <br />
            <input
            value={values.location} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='location'
            className='inp-tex border-1 w-[80%]' 
            type="text" />
            <p className='text-red-500 absolute right-0'>{touched.location && errors.location?errors.location:""}</p>
          </label>
          <label className='block relative'>experienceLevel: <br />
            <input
            value={values.experienceLevel} 
            onChange={handleChange}
            onBlur={handleBlur} 
            placeholder='your text' 
            name='experienceLevel'
            className='inp-tex border-1 w-[80%]'  type="text" />
            <p className='text-red-500 absolute right-0'>{touched.experienceLevel && errors.experienceLevel?errors.experienceLevel:""}</p>
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

export default JobPost2
