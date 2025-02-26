import { styled } from '@mui/material';
import './description.css'
import React from 'react'
import { MdClear } from "react-icons/md";

function DescriptionPage({handleDes_page,description}) {
    console.log(description)


  return (
    <div onClick={handleDes_page} style={{display: description?"flex":"none"}} className='fixed top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] border-10 z-34334 flex justify-center items-center '>
      <div  onClick={(e) => e.stopPropagation()} className='bg-white w-[750px] h-[550px] description'>
      <div className='flex justify-end'><MdClear size={25} onClick={handleDes_page} className='w-[30px]'/></div>
        <div className='flex items-center justify-center gap-10'><div>LOGO</div><h1>Software Engineer</h1></div>
        <div className='flex flex-col items-center job_des'>
        <h2>Full-time</h2>
        <h2>London</h2>
        <h2>2000$-5000%</h2>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iste quia enim harum eveniet, asperiores delectus, consequatur 
            fugiat explicabo molestiae nemo animi sunt non impedit odit mollitia corporis reprehenderit laborum.</p>
      </div>
    </div>
  )
}

export default DescriptionPage
