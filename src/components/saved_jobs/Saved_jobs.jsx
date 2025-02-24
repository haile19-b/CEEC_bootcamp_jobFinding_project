import React from 'react'
import Feed from '../Feed/Feed'
import Jobs from '../Feed/Jobs'
import { MdClear } from "react-icons/md";
import './saved_jobs.css'

function Saved_jobs({jo,setJo,savedjo,setSavedjo,handle_clicked}) {
  return (
    <div className=' container bg-white w-[343px] h-[613px] rounded-[20px] border-0 z-999 relative'>
      <p className='w-[100%] h-[39px] font-semibold text-[32px] text-center'>Saved Jops</p>
      {
        savedjo.map((obj,index) =>
          <div className='inbox border-0 w-[295px] h-[115px] rounded-[10px]'>
            <div className='flex justify-between text-center'><p><img className='w-[53px] h-[53px] rounded-[50%]' src = {obj.logo} />
            </p><h4>{obj.title} <div>{obj.company}</div></h4><div><MdClear className='w-[24px] h-[24px]' onClick={()=>{handle_clicked(obj.id)}}/></div></div>
            <div className='text-center'>{obj.type} {obj.salary}</div>
          </div>
        )
      }
    </div>
  )
}

export default Saved_jobs
