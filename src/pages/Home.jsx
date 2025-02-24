import React from 'react'
import Jops from '../components/Feed/Feed'
import Feed from '../components/Feed/Feed'
import Saved_jobs from '../components/saved_jobs/Saved_jobs'
import Filter from '../components/filter/Filter'
function Home({handle_page,manualInput,setManualInput,search,jo,setJo,savedjo,location,setSavedjo,handle_clicked}) {
  return (
    <div>
      <div className='content flex'>
       <div className='sticky top-[150px] h-fit'>
       <Filter manualInput = {manualInput} setManualInput = {setManualInput} />
       </div>
      <Feed search = {search} location = {location} manualInput = {manualInput} jo = {jo} setJo={setJo} savedjo = {savedjo} setSavedjo = {setSavedjo} handle_clicked = {handle_clicked}/>

    <div>
    <Saved_jobs jo = {jo} setJo={setJo} savedjo = {savedjo} setSavedjo = {setSavedjo} handle_clicked = {handle_clicked}/>
    </div>
    </div>
    <div className='h-[40px] text-xl z-[100000] absolute left-[50%] text-center flex gap-2'>
      <div className='border-2 p-[10px] w-[50px] cursor-pointer bg-blue-300 text-white' onClick={()=>handle_page("-")}>-</div>  <div className='border-2 p-[10px] w-[50px] cursor-pointer bg-blue-300 text-white' onClick={()=>handle_page("1")}>1</div>  <div className='border-2 p-[10px] w-[50px] cursor-pointer bg-blue-300 text-white'onClick={()=>handle_page("2")}>2</div>  <div className='border-2 p-[10px] w-[50px] cursor-pointer bg-blue-300 text-white'onClick={()=>handle_page("3")}>3</div>  <div className='border-2 p-[10px] w-[50px] cursor-pointer bg-blue-300 text-white' onClick={()=>handle_page("+")}>+</div>
    </div>
    </div>
  )
}

export default Home
